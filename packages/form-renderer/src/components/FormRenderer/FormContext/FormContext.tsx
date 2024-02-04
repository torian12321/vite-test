import { createContext, useContext } from 'react';
import type {
  FormContextProps,
  GetFieldPropsValues,
} from './FormContext.types';

const iniValues: FormContextProps = {
  disabled: false,
  innerLabel: false,
  inlineDisplay: false,
  values: {},
  allValues: {},
  choicesCollection: {},
  getFieldProps: (_fieldName: string) => ({}) as GetFieldPropsValues,
  onSubmit: () => undefined,
};

export const FormContext = createContext<FormContextProps>(iniValues);

export const useFormContext = (): FormContextProps => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error(
      'Form compound components cannot be rendered outside the Form component',
    );
  }
  return context;
};
