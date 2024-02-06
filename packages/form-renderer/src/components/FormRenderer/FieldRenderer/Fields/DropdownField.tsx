import { useEffect } from 'react'
import type { SyntheticEvent } from 'react'
import MuiAutocomplete, {
  createFilterOptions,
} from '@mui/material/Autocomplete'
import MuiCircularProgress from '@mui/material/CircularProgress'
import { FIELD_TYPE } from '../../FormRenderer.constants'
import { loaderStyles } from './Fields.styles'
import type { FieldProps, Choice } from './Fields.types'
import { getFieldChoices } from './Fields.utils'
import { SharedTextField } from './SharedTextField'

// Render a maximum of 50 results when open to avoid performance issues
// All options are still available when querying
const filterOptions = createFilterOptions<Choice>({
  limit: 50,
})

export const DropdownField = ({
  type,
  name,
  value,
  label,
  loading = false,
  disabled = false,
  required = false,
  placeholder = 'Select',
  properties = {},
  error,
  onChange,
  onBlur = () => undefined,
}: FieldProps): JSX.Element | null => {
  // After a new value is set, trigger onBlur to calculate validations.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onBlur(), [value])

  if (type !== FIELD_TYPE.DROPDOWN) return null

  const choices = getFieldChoices(properties)
  const defalutValue = choices.find((ch) => ch.value === value) || null

  const isOptionEqualToValue = (option: Choice, val: Choice): boolean =>
    option.value === val.value

  const onChangeHandler = (_: SyntheticEvent, newValue?: Choice | null) => {
    if (newValue?.value) {
      onChange(newValue.value)
    } else {
      onChange(null)
    }
  }

  return (
    <>
      {loading && <MuiCircularProgress size={12} sx={loaderStyles} />}
      <MuiAutocomplete
        disablePortal
        options={choices}
        filterOptions={filterOptions}
        onChange={onChangeHandler}
        onBlur={onBlur}
        isOptionEqualToValue={isOptionEqualToValue}
        loading={loading}
        disabled={disabled}
        value={defalutValue}
        defaultValue={defalutValue}
        disableClearable={required}
        getOptionDisabled={({ disabled = false }: Choice) => Boolean(disabled)}
        renderInput={(params: any) => (
          <SharedTextField
            {...params}
            placeholder={`-- ${placeholder} --`}
            name={name}
            label={label}
            error={error}
            value={value}
          />
        )}
      />
    </>
  )
}
