import { useState } from 'react';
import type { FieldValue, FormField } from '../../FormRenderer.types';
import type { UseFormContextValues } from '../FormContext.types';
import type { UseFormContextProps } from './useForm.types';
import { useFormFields } from './useFormFields';
import { useFormValidate } from './useFormMessages';

export const useForm = ({
  fields = {},
  logic = [],
  validateAfterSubmit = true,
  onSubmit = () => undefined,
}: UseFormContextProps): UseFormContextValues => {
  const {
    formFields,
    fieldValues,
    allFieldValues,
    touchField,
    setFormFieldValue,
  } = useFormFields(fields, logic);
  const [formSubmited, setFormSubmited] = useState<boolean>(false);
  const { validations, validateFormField, getFieldValidations } =
    useFormValidate(formFields);

  const handelOnSubmit = () => {
    setFormSubmited(true);

    const invalidFields = Object.values(formFields)
      .filter(field => field.visible)
      .filter(
        field => validations[field.name] && !validations[field.name].isValid,
      )
      .map(field => field.name);

    onSubmit({
      values: fieldValues,
      allValues: allFieldValues,
      isValid: invalidFields.length === 0,
      invalidFields,
    });
  };

  const onBlur = (fieldName: string) => {
    const currentField = formFields[fieldName];

    validateFormField(currentField);
    touchField(fieldName);
  };

  const getFieldData = (fieldName: string): FormField => {
    const currentField = formFields[fieldName];
    const { messages, isValid } = getFieldValidations(fieldName);
    const showValidations =
      (currentField?.touched && !validateAfterSubmit && !isValid) ||
      (formSubmited && !isValid);

    return {
      ...currentField,
      value: fieldValues[fieldName],
      isValid: showValidations ? isValid : true,
      messages: showValidations ? messages : [],
    };
  };

  const getFieldProps = (fieldName: string) => ({
    ...getFieldData(fieldName),
    onBlur: () => onBlur(fieldName),
    setValue: (v: FieldValue) => setFormFieldValue(fieldName, v),
  });

  return {
    values: fieldValues,
    allValues: allFieldValues,
    getFieldProps,
    onSubmit: handelOnSubmit,
  };
};
