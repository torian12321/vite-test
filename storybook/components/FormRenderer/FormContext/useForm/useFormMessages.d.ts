import type { FormField } from '../../FormRenderer.types';
import type { FormFields } from './useForm.types';
import type { FormFieldValidations, ValidateField } from './useForm.types';
interface UseFormMessagesValues {
    validations: FormFieldValidations;
    validateFormField: (field: FormField) => void;
    getFieldValidations: (fieldName: string) => ValidateField;
}
export declare const useFormValidate: (fields: FormFields) => UseFormMessagesValues;
export {};
