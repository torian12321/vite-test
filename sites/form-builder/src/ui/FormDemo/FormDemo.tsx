import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { FormRenderer } from 'form-renderer'
import { useFieldActions } from '../../store/actions/fields'
import { getFieldsList } from '../../store/selectors/fields.selectors'
import { useAppSelector } from '../../store/actions'
import { getSelectedFieldDetails } from '../../store/selectors/settings.selectors'
import {
  Wrapper,
  selectedFieldStyles,
  unselectedFieldStyles,
} from './FormDemo.styles'

export const FormDemo = () => {
  const [key, setKey] = useState<string>(uuidv4())
  const { resetFields } = useFieldActions()
  const fields = useAppSelector(getFieldsList)
  const selectedField = useAppSelector(getSelectedFieldDetails)
  const hasSelection = Boolean(selectedField)

  useEffect(() => {
    // FormRenderer gets an initial `fields` stated and cached its value
    // If the fields are modified after initial renderer it does not update correctly
    // Updating the key value will force to re-render the component
    // https://stackoverflow.com/questions/21749798/how-can-i-reset-a-react-component-including-all-transitively-reachable-state
    setKey(uuidv4())
  }, [fields])

  return (
    <Wrapper>
      <FormRenderer
        key={key}
        id='demo-form'
        fields={fields}
        sxFields={hasSelection ? unselectedFieldStyles : {}}
        sxFieldsByName={{
          [selectedField?.name]: selectedFieldStyles,
        }}
      />
      <button onClick={resetFields}>Reset</button>
    </Wrapper>
  )
}
