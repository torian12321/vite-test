import { FIELD_TYPE, FIELDS_WITH_OPTIONS } from '../FormRenderer.constants';
import type { Field } from '../FormRenderer.types';
import { mockOptions } from './mockFormUtils';
import type { FormData } from './mockFormUtils';

export const formWithAllFieldTypes: FormData = {
  fields: Object.values(FIELD_TYPE).map(type => ({
    type,
    name: type,
    label: `Field Type - ${type.replaceAll('_', ' ')}`,
    properties: FIELDS_WITH_OPTIONS.includes(type)
      ? {
          choices: mockOptions,
        }
      : {},
  })) as Field[],
};
