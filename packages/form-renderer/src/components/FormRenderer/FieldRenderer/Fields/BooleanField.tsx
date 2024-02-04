import type { ChangeEvent } from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import { FIELD_TYPE } from '../../FormRenderer.constants';
import type { FieldProps } from './Fields.types';

export const BooleanField = ({
  type,
  name,
  value = false,
  disabled = false,
  onBlur,
  onChange,
}: FieldProps): JSX.Element | null => {
  if (type !== FIELD_TYPE.BOOLEAN) return null;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked || false;

    onChange(newValue);
  };

  return (
    <MuiCheckbox
      id={name}
      name={name}
      value={value}
      checked={value as boolean}
      disabled={disabled}
      onChange={handleOnChange}
      onBlur={onBlur}
    />
  );
};
