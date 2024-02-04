import type { ChoicesCollection } from '../FieldRenderer';
import type { FieldValue } from '../FormRenderer.types';
import type { FieldValuesObj } from './useForm/useForm.types';

export interface FormContextProps extends UseFormContextValues {
  disabled?: boolean;
  innerLabel?: boolean;
  inlineDisplay?: boolean;
  choicesCollection?: ChoicesCollection;
}

export type GetFieldPropsValues = FieldValuesObj & {
  onBlur: VoidFunction;
  setValue: (value: FieldValue) => void;
};

export type GetFieldProps = (fieldName: string) => GetFieldPropsValues;
export interface UseFormContextValues {
  values: FieldValuesObj;
  allValues: FieldValuesObj;
  getFieldProps: GetFieldProps;
  onSubmit: () => void;
}
