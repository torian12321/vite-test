import type { Message } from '../../FieldRenderer';
import type { FieldValue, FormLogic, FormField, SharedValidations } from '../../FormRenderer.types';
export type FieldValuesObj = {
    [fieldName: string]: FieldValue;
};
export type FormFields = {
    [fieldName: string]: FormField;
};
export type OnSubmitArgs = {
    values: FieldValuesObj;
    allValues: FieldValuesObj;
    isValid: boolean;
    invalidFields: string[];
};
export type OnSubmit = (props: OnSubmitArgs) => void;
export interface UseFormContextProps {
    fields: FormFields;
    logic: FormLogic[];
    validateAfterSubmit?: boolean;
    onSubmit?: OnSubmit;
}
export type FormFieldValidations = {
    [fieldName: string]: ValidateField;
};
export interface ValidateField {
    messages: Message[];
    isValid: boolean;
}
export interface AllValidations extends SharedValidations {
    min_length?: number;
    max_length?: number;
    min?: number;
    max?: number;
}
