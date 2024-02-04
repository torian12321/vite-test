import { FIELD_TYPE } from '../FormRenderer.constants';
import { mockOptions } from './mockFormUtils';
import type { FormData } from './mockFormUtils';

export const formWithDefaultValues: FormData = {
  fields: [
    {
      type: FIELD_TYPE.TEXT,
      name: 'name',
      label: 'name',
      defaultValue: 'Peter',
    },
    {
      type: FIELD_TYPE.LONG_TEXT,
      name: 'surname',
      label: 'surname',
      defaultValue: 'Parker',
    },
    {
      type: FIELD_TYPE.NUMBER,
      name: 'age',
      label: 'age',
      defaultValue: 22,
    },
    {
      type: FIELD_TYPE.DROPDOWN,
      name: 'role',
      label: 'Role',
      defaultValue: mockOptions[2].value,
      properties: {
        choices: mockOptions,
      },
    },
  ],
};
