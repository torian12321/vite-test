import { useEffect } from 'react';
import { useFormContext } from '../FormContext';
import { FIELD_TYPE, emptyFieldValues } from '../FormRenderer.constants';
import { isFieldWithOptions } from './FieldRenderer.utils';
import { useGetChoices } from './useGetChoices';

/**
 *
 * Validate option selected.
 *
 * If the value set on the dropdown does not exist on the options, clear the value.
 * This is useful when the list of options is externally changed, the previously selected value might not exist on the new list of options.
 */

export const useValidateOptionSelected = (fieldName: string): void => {
  const { choices = [], isLoading = false } = useGetChoices(fieldName);
  const { getFieldProps } = useFormContext();
  const { type, value, setValue } = getFieldProps(fieldName);

  useEffect(() => {
    if (!isLoading && Boolean(value) && isFieldWithOptions(type)) {
      if (!Array.isArray(value)) {
        const option = choices.find(choice => choice.value === value);

        if (!option) {
          // If the previously selected option is not in the new list, reset.
          setValue(emptyFieldValues[type as FIELD_TYPE]);
        }
      } else {
        // Multiple select case
        // Get only values that exist on the new choices list
        const options = choices.filter(choice => value.includes(choice?.value));
        setValue(options);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, choices]);
};
