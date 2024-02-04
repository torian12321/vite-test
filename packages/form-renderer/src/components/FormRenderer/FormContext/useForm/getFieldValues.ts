import { useMemo } from 'react';
import { INFO_FIELDS } from '../../FormRenderer.constants';
import type { FormFields, FieldValuesObj } from './useForm.types';

const getFieldValues = (
  formFields: FormFields,
  /* if getAll = false, only visible fiels are returned */
  getAll: boolean,
): FieldValuesObj =>
  Object.values(formFields)
    .filter(field => !INFO_FIELDS.includes(field.type))
    .filter(field => getAll || Boolean(field?.visible))
    .reduce(
      (acc, currField) => ({
        ...acc,
        [currField.name]: currField.value,
      }),
      {},
    );

// Get values for visible fields
export const useGetFieldValues = (formFields: FormFields) =>
  useMemo(() => getFieldValues(formFields, false), [formFields]);

// Get all field values
export const useGetAllFieldValues = (formFields: FormFields) =>
  useMemo(() => getFieldValues(formFields, true), [formFields]);
