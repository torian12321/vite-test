import { ChangeEvent } from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import { FIELD_TYPE } from '../../FormRenderer.constants';
import type { FieldProps, Choice, ChoiceValue } from './Fields.types';
import { getFieldChoices } from './Fields.utils';

const getOptionName = (choice: Choice): string => {
  if (choice.value) {
    return choice?.value.toString();
  }
  if (choice.label) {
    return choice?.label.toString();
  }
  return '';
};

export const OptionsListField = ({
  type,
  name,
  value = [] as ChoiceValue[],
  disabled = false,
  onChange,
  onBlur,
  ...rest
}: FieldProps) => {
  if (type !== FIELD_TYPE.OPTIONS_LIST) return null;
  if (!Array.isArray(value)) return null;

  const choices = getFieldChoices(rest?.properties);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const cbValue = event.target.value;

    if (value.includes(cbValue)) {
      onChange(value.filter(v => v !== cbValue));
    } else {
      onChange([...value, cbValue]);
    }
  };

  return (
    <div>
      {choices.map((option, index: number) => {
        const choiceName = getOptionName(option);

        return (
          <MuiFormControlLabel
            key={index}
            value={option.value}
            control={
              <MuiCheckbox
                key={index}
                defaultChecked={value.includes(choiceName)}
                name={choiceName}
                value={option.value}
                size='small'
                disabled={disabled}
                onChange={handleOnChange}
                onBlur={onBlur}
              />
            }
            label={option.label || option.value}
            disabled={option.disabled || disabled}
            onBlur={onBlur}
          />
        );
      })}
    </div>
  );
};
