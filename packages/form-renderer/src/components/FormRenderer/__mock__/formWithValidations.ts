import { FIELD_TYPE } from '../FormRenderer.constants';
import { mockOptions } from './mockFormUtils';
import type { FormData } from './mockFormUtils';

export const formWithValidations: FormData = {
  fields: [
    {
      type: FIELD_TYPE.TEXT,
      name: 'name',
      label: 'name',
      validations: {
        required: true,
        min_length: 3,
        max_length: 20,
      },
    },
    {
      type: FIELD_TYPE.LONG_TEXT,
      name: 'surname',
      label: 'surname',
      validations: {
        min_length: 3,
        max_length: 100,
      },
    },
    {
      type: FIELD_TYPE.NUMBER,
      name: 'age',
      label: 'age',
      validations: {
        required: true,
        min: 5,
        max: 99,
      },
    },
    {
      type: FIELD_TYPE.DROPDOWN,
      name: 'role',
      label: 'Role',
      properties: {
        choices: mockOptions,
      },
      validations: {
        required: true,
      },
    },
  ],
};
