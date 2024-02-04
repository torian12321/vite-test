import { useState, useEffect } from 'react';
import type { FieldValue, FormLogic } from '../../FormRenderer.types';
import { applyFieldLogic } from './applyLogic';
import { useGetFieldValues, useGetAllFieldValues } from './getFieldValues';
import type { FormFields, FieldValuesObj } from './useForm.types';

interface UseFormFields {
  formFields: FormFields;
  fieldValues: FieldValuesObj;
  allFieldValues: FieldValuesObj;
  touchField: (fieldName: string) => void;
  setFormFieldValue: (fieldName: string, value: FieldValue) => void;
}

export const useFormFields = (
  fields: FormFields = {},
  logic: FormLogic[] = [],
): UseFormFields => {
  const [formFields, setFormFields] = useState<FormFields>(fields);
  const fieldValues = useGetFieldValues(formFields);
  const allFieldValues = useGetAllFieldValues(formFields);

  useEffect(() => {
    const formWithLogicChanges = applyFieldLogic(formFields, logic);

    // useEffect will try to change the value of formFields, and it is triggered on formFields changes
    // To avoid an infinite rerender, do a deep object comparison between new and current object
    if (JSON.stringify(formWithLogicChanges) !== JSON.stringify(formFields)) {
      setFormFields(formWithLogicChanges);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allFieldValues, logic]);

  const setFieldValue = (fieldName: string, value: FieldValue) => {
    setFormFields(prev => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        value,
      },
    }));
  };

  const touchField = (fieldName: string) => {
    if (!formFields[fieldName]?.touched) {
      setFormFields(prev => ({
        ...prev,
        [fieldName]: {
          ...prev[fieldName],
          touched: true,
        },
      }));
    }
  };

  return {
    formFields,
    fieldValues,
    allFieldValues,
    setFormFieldValue: setFieldValue,
    touchField,
  };
};
