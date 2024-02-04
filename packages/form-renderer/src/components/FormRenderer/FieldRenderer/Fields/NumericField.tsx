import { FIELD_TYPE } from '../../FormRenderer.constants';
import type { FieldProps } from './Fields.types';
import { SharedTextField } from './SharedTextField';

export const NumericField = ({
  type,
  name,
  value,
  label,
  disabled = false,
  placeholder = '',
  onChange,
  onBlur,
  error,
}: FieldProps): JSX.Element | null => {
  if (type !== FIELD_TYPE.NUMBER) return null;

  const handleOnChange = (val: string) => {
    const number = parseFloat(val);

    if (onChange && !isNaN(number)) {
      onChange(number);
    } else if (!val) {
      onChange(undefined);
    }
  };

  return (
    <SharedTextField
      name={name}
      type='number'
      inputProps={{ step: '1', inputMode: 'numeric', pattern: '[0-9]*' }}
      label={label}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      error={error}
      onChange={handleOnChange}
      onBlur={onBlur}
    />
  );
};
