import type { FieldValue } from './FormRenderer.types';
export declare enum FIELD_TYPE {
    TEXT = "text",
    LONG_TEXT = "long_text",
    NUMBER = "number",
    DATE = "date",
    DATE_TIME = "date_time",
    BOOLEAN = "boolean",
    FILE_UPLOAD = "file_upload",
    DROPDOWN = "dropdown",
    OPTIONS_LIST = "options_list",
    RADIO_BUTTON = "radio_button",
    INFO_MESSAGE = "info_message",
    INFO_LIST = "info_list"
}
export declare const FIELDS_WITHOUT_INNER_LABEL: FIELD_TYPE[];
export declare const FIELDS_WITH_OPTIONS: FIELD_TYPE[];
export declare const INFO_FIELDS: FIELD_TYPE[];
export declare enum LOGIC_TYPES {
    EQUAL = "equal",
    NOT_EQUAL = "not_equal",
    HAS_VALUE = "has_value",
    CONTAINS = "contains",
    LOWER_THAN = "lower_than",
    GREATER_THAN = "greater_than",
    AND = "and",
    OR = "or"
}
export declare enum LOGIC_ACTIONS {
    SHOW = "show",
    HIDDE = "hidde",
    MAKE_MANDATORY = "make_mandatory",
    MAKE_DISABLED = "make_disabled"
}
/**
 * Each field type have a different 'empty' value.
 * use `emptyFieldValues` to set initial values or when reseting.
 */
export declare const emptyFieldValues: Record<FIELD_TYPE, FieldValue>;
