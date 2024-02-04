import { FIELD_TYPE } from '../../FormRenderer.constants';
import type { FieldProps } from './Fields.types';
import { SharedTextField } from './SharedTextField';

export const TextField = ({
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
  if (type !== FIELD_TYPE.TEXT) return null;

  return (
    <SharedTextField
      name={name}
      label={label}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      error={error}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
