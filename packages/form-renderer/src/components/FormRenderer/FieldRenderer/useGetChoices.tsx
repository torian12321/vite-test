import { useFormContext } from '../FormContext';
import type { ChoiceItem } from './Fields';

/** If choicesRef is provided, get choices from collection if possible */
export const useGetChoices = (name: string): ChoiceItem => {
  const { getFieldProps, choicesCollection = {} } = useFormContext();
  const { properties = {} } = getFieldProps(name);
  const { choices = [], choicesRef } = properties;

  if (choicesRef && !choicesCollection[choicesRef]) {
    console.warn(
      `Collection '${choicesRef}' not provided, please add it to 'choicesCollection' object.`,
    );
  }

  return (
    choicesCollection[choicesRef] || {
      isLoading: false,
      choices,
    }
  );
};
