import type { FieldValue, FormLogic } from '../../FormRenderer.types';
import type { FormFields, FieldValuesObj } from './useForm.types';
interface UseFormFields {
    formFields: FormFields;
    fieldValues: FieldValuesObj;
    allFieldValues: FieldValuesObj;
    touchField: (fieldName: string) => void;
    setFormFieldValue: (fieldName: string, value: FieldValue) => void;
}
export declare const useFormFields: (fields?: FormFields, logic?: FormLogic[]) => UseFormFields;
export {};
