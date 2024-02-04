import type { ChangeEvent, MouseEvent } from 'react';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import MuiRadio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import { FIELD_TYPE } from '../../FormRenderer.constants';
import { radioButtonItemStyle } from './Fields.styles';
import type { FieldProps } from './Fields.types';
import { getFieldChoices } from './Fields.utils';

export const RadioGroup = ({
  type,
  name,
  value,
  disabled = false,
  required = false,
  onChange,
  onBlur,
  ...rest
}: FieldProps) => {
  if (type !== FIELD_TYPE.RADIO_BUTTON) return null;

  const choices = getFieldChoices(rest?.properties);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event?.target?.value || null;

    onChange(newValue);
  };

  /**
   * Logic for deselecting radio button
   */
  const handleOnClick = (event: MouseEvent<HTMLLabelElement>) => {
    const newValue = (event.target as HTMLInputElement)?.value;

    // Allow uncheck radio button when it is not required
    if (!required && newValue === value) {
      onChange(null);
    }
  };

  return (
    <MuiRadioGroup
      row
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
    >
      {choices.map((option, index: number) => (
        <MuiFormControlLabel
          key={index}
          onClick={handleOnClick}
          sx={radioButtonItemStyle}
          value={option.value}
          control={<MuiRadio size='small' />}
          label={option.label || option.value}
          disabled={option.disabled || disabled}
          onBlur={onBlur}
        />
      ))}
    </MuiRadioGroup>
  );
};
