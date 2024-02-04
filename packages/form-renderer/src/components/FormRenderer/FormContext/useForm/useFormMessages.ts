import { useState } from 'react';
import type { FormField } from '../../FormRenderer.types';
import type { FormFields } from './useForm.types';
import type { FormFieldValidations, ValidateField } from './useForm.types';
import { validateField } from './validateField';

interface UseFormMessagesValues {
  validations: FormFieldValidations;
  validateFormField: (field: FormField) => void;
  getFieldValidations: (fieldName: string) => ValidateField;
}

const getInitialFormValidations = (fields: FormFields): FormFieldValidations =>
  Object.values(fields).reduce(
    (acc, field) => ({
      ...acc,
      [field.name]: validateField(field),
    }),
    {},
  );

export const useFormValidate = (fields: FormFields): UseFormMessagesValues => {
  const [validations, setValidations] = useState<FormFieldValidations>(
    getInitialFormValidations(fields),
  );

  const validateFormField = (field: FormField) => {
    setValidations(prev => ({
      ...prev,
      [field.name]: validateField(field),
    }));
  };

  const getFieldValidations = (fieldName: string) =>
    validations[fieldName] || [];

  return {
    validations,
    getFieldValidations,
    validateFormField,
  };
};
