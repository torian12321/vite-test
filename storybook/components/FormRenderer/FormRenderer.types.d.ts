import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';
import type { Properties, ChoicesCollection, ChoiceValue, Message } from './FieldRenderer';
import type { OnSubmit, FieldValuesObj } from './FormContext';
import { FIELD_TYPE, LOGIC_TYPES, LOGIC_ACTIONS } from './FormRenderer.constants';
type FieldName = string;
export type FieldValue = any;
export type DefaultValues = {
    [fieldName: FieldName]: FieldValue;
};
export interface FormProps {
    id?: string;
    disabled?: boolean;
    sx?: SxProps<Theme>;
    onChange?: OnChange;
}
export interface FormRendererProps {
    id: string;
    fields: Field[];
    logic?: FormLogic[];
    disabled?: boolean;
    defaultValues?: DefaultValues;
    choicesCollection?: ChoicesCollection;
    /** If `false`, only show validations after form is submited. */
    validateAfterSubmit?: boolean;
    /** only applies  if `inlineDisplay` is `false` */
    innerLabel?: boolean;
    inlineDisplay?: boolean;
    /** Styles to apply to from wrapper component */
    sxForm?: SxProps<Theme>;
    /** Styles to apply to ALL fields */
    sxFields?: SxProps<Theme>;
    /** Styles to apply to fields based on field type. It will apply on top of sxFields */
    sxFieldsByType?: {
        [key in FIELD_TYPE]?: SxProps<Theme>;
    };
    /** Styles to apply to fields based on field name. It will apply on top of sxFieldsByType */
    sxFieldsByName?: {
        [fieldName: FieldName]: SxProps<Theme>;
    };
    onSubmit?: OnSubmit;
    onChange?: OnChange;
}
export type Field = {
    name: FieldName;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    properties?: Properties;
} & (TextFieldProps | LongTextFieldProps | NumberFieldProps | DateFieldProps | DateTimeFieldProps | BooleanFieldProps | FileFieldProps | SelectFieldProps | RadioGroupFieldProps | OptionsListFieldProps | InfoMessageProps | InfoListProps);
export type SharedValidations = {
    required?: boolean;
};
type TextFieldProps = {
    type: FIELD_TYPE.TEXT;
    defaultValue?: string;
    validations?: SharedValidations & {
        max_length?: number;
        min_length?: number;
    };
};
type LongTextFieldProps = {
    type: FIELD_TYPE.LONG_TEXT;
    defaultValue?: string;
    validations?: SharedValidations & {
        max_length?: number;
        min_length?: number;
    };
};
type NumberFieldProps = {
    type: FIELD_TYPE.NUMBER;
    defaultValue?: number;
    validations?: SharedValidations & {
        min?: number;
        max?: number;
    };
};
type DateDefaultValue = 'today' | ((string | Date) & {
    date?: string | Date;
});
type DateFieldProps = {
    type: FIELD_TYPE.DATE;
    defaultValue?: DateDefaultValue;
    validations?: SharedValidations;
};
type DateTimeFieldProps = {
    type: FIELD_TYPE.DATE_TIME;
    defaultValue?: DateDefaultValue;
    validations?: SharedValidations;
};
type BooleanFieldProps = {
    type: FIELD_TYPE.BOOLEAN;
    defaultValue?: boolean;
    validations?: SharedValidations;
};
type FileFieldProps = {
    type: FIELD_TYPE.FILE_UPLOAD;
    defaultValue?: File;
    validations?: SharedValidations;
};
type SelectFieldProps = {
    type: FIELD_TYPE.DROPDOWN;
    defaultValue?: ChoiceValue;
    validations?: SharedValidations;
};
type RadioGroupFieldProps = {
    type: FIELD_TYPE.RADIO_BUTTON;
    defaultValue?: ChoiceValue;
    validations?: SharedValidations;
};
type OptionsListFieldProps = {
    type: FIELD_TYPE.OPTIONS_LIST;
    defaultValue?: ChoiceValue[];
    validations?: SharedValidations;
};
type InfoMessageProps = {
    type: FIELD_TYPE.INFO_MESSAGE;
    defaultValue?: never;
    validations?: never;
};
type InfoListProps = {
    type: FIELD_TYPE.INFO_LIST;
    defaultValue?: never;
    validations?: never;
};
export interface FormField extends Omit<Field, 'defaultValue'> {
    value: FieldValue;
    visible: boolean;
    touched: boolean;
    isValid: boolean;
    messages: Message[];
}
export type OnChangeArgs = {
    values: FieldValuesObj;
};
export type OnChange = (props: {
    values: FieldValuesObj;
}) => void;
export type ConditionTypeLogical = LOGIC_TYPES.AND | LOGIC_TYPES.OR;
export type ConditionTypeBasic = Exclude<LOGIC_TYPES, ConditionTypeLogical>;
export type FormLogicCondition = ConditionBasic | ConditionLogical | ConditionHasValue;
export type ConditionLogical = {
    type: ConditionTypeLogical;
    conditions: FormLogicCondition[];
};
export type ConditionBasic = {
    type: Exclude<ConditionTypeBasic, LOGIC_TYPES.HAS_VALUE>;
    ref: FieldName;
    value: FieldValue;
};
export type ConditionHasValue = {
    type: LOGIC_TYPES.HAS_VALUE;
    ref: FieldName;
};
export type FormLogic = {
    /**  WHEN - Condition that will trigger the action. */
    condition: FormLogicCondition;
    actions: {
        /** WHERE - Field(s) that will be affected by the logic. */
        ref: FieldName | FieldName[];
        /** WHAT - Action to take when the condition is fulfilled. */
        action: LOGIC_ACTIONS;
    }[];
};
export {};
