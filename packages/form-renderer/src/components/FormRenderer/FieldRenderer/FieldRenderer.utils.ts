import {
  FIELD_TYPE,
  FIELDS_WITH_OPTIONS,
  FIELDS_WITHOUT_INNER_LABEL,
  INFO_FIELDS,
} from '../FormRenderer.constants';

export const isInfoField = (type: FIELD_TYPE): boolean =>
  INFO_FIELDS.includes(type);

export const isFieldWithLabel = (type: FIELD_TYPE): boolean =>
  FIELDS_WITHOUT_INNER_LABEL.includes(type);

export const isFieldWithOptions = (type: FIELD_TYPE): boolean =>
  FIELDS_WITH_OPTIONS.includes(type);
