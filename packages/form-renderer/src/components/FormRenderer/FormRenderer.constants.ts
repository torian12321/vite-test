import type { FieldValue } from './FormRenderer.types';

export enum FIELD_TYPE {
  TEXT = 'text',
  LONG_TEXT = 'long_text',
  NUMBER = 'number',
  DATE = 'date',
  DATE_TIME = 'date_time',
  BOOLEAN = 'boolean',
  FILE_UPLOAD = 'file_upload',

  DROPDOWN = 'dropdown',
  OPTIONS_LIST = 'options_list',
  RADIO_BUTTON = 'radio_button',

  // Info fields
  INFO_MESSAGE = 'info_message',
  INFO_LIST = 'info_list',
}

export const FIELDS_WITHOUT_INNER_LABEL: FIELD_TYPE[] = [
  FIELD_TYPE.BOOLEAN,
  FIELD_TYPE.FILE_UPLOAD,
  FIELD_TYPE.RADIO_BUTTON,
];

export const FIELDS_WITH_OPTIONS: FIELD_TYPE[] = [
  FIELD_TYPE.DROPDOWN,
  FIELD_TYPE.RADIO_BUTTON,
  FIELD_TYPE.OPTIONS_LIST,
  FIELD_TYPE.INFO_LIST,
];

export const INFO_FIELDS: FIELD_TYPE[] = [
  FIELD_TYPE.INFO_MESSAGE,
  FIELD_TYPE.INFO_LIST,
];

export enum LOGIC_TYPES {
  EQUAL = 'equal',
  NOT_EQUAL = 'not_equal',
  HAS_VALUE = 'has_value',
  CONTAINS = 'contains',
  LOWER_THAN = 'lower_than',
  GREATER_THAN = 'greater_than',
  AND = 'and',
  OR = 'or',
}

export enum LOGIC_ACTIONS {
  SHOW = 'show',
  HIDDE = 'hidde',
  MAKE_MANDATORY = 'make_mandatory',
  MAKE_DISABLED = 'make_disabled',
}

/**
 * Each field type have a different 'empty' value.
 * use `emptyFieldValues` to set initial values or when reseting.
 */
export const emptyFieldValues: Record<FIELD_TYPE, FieldValue> = {
  [FIELD_TYPE.TEXT]: '',
  [FIELD_TYPE.LONG_TEXT]: '',

  [FIELD_TYPE.NUMBER]: '',

  // If not set to null, datepicker will show a date on render when value is undefined.
  [FIELD_TYPE.DATE]: null,
  [FIELD_TYPE.DATE_TIME]: null,

  [FIELD_TYPE.BOOLEAN]: false,
  [FIELD_TYPE.FILE_UPLOAD]: undefined,
  [FIELD_TYPE.DROPDOWN]: undefined,
  [FIELD_TYPE.OPTIONS_LIST]: [],
  [FIELD_TYPE.RADIO_BUTTON]: undefined,

  // Info fields
  [FIELD_TYPE.INFO_MESSAGE]: undefined,
  [FIELD_TYPE.INFO_LIST]: undefined,
};
