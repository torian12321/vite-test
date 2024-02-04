import {
  FIELD_TYPE,
  LOGIC_TYPES,
  LOGIC_ACTIONS,
} from '../FormRenderer.constants';
import type { FormData } from './mockFormUtils';
import { mockOptions } from './mockFormUtils';

export const formExampleCreateRequest: FormData = {
  fields: [
    {
      type: FIELD_TYPE.DROPDOWN,
      name: 'session_year',
      label: 'Session Year',
      validations: {
        required: true,
      },
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: FIELD_TYPE.DATE_TIME,
      name: 'date',
      label: 'Request Date',
      validations: {
        required: true,
      },
    },
    {
      type: FIELD_TYPE.BOOLEAN,
      name: 'reintro',
      label: 'Reintro',
    },
    {
      type: FIELD_TYPE.DROPDOWN,
      name: 'session',
      label: 'Session',
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: FIELD_TYPE.DROPDOWN,
      name: 'bill_number',
      label: 'Bill Number',
      validations: {
        required: true,
      },
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: FIELD_TYPE.RADIO_BUTTON,
      name: 'chamber',
      label: 'Chamber',
      properties: {
        choices: [
          { value: 'house', label: 'House' },
          { value: 'seante', label: 'Senate' },
          { value: 'both', label: 'Both' },
        ],
      },
    },
    {
      type: FIELD_TYPE.DROPDOWN,
      name: 'request_type',
      label: 'Request Type',
      validations: {
        required: true,
      },
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: FIELD_TYPE.DROPDOWN,
      name: 'drafter',
      label: 'Drafter',
      validations: {
        required: true,
      },
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: FIELD_TYPE.DROPDOWN,
      name: 'secretary',
      label: 'Secretary',
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: FIELD_TYPE.DROPDOWN,
      name: 'requester',
      label: 'Requester',
      validations: {
        required: true,
      },
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: FIELD_TYPE.DROPDOWN,
      name: 'sponsor',
      label: 'Sponsor',
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: FIELD_TYPE.DROPDOWN,
      name: 'subject_tag',
      label: 'Subject Tag',
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: FIELD_TYPE.BOOLEAN,
      name: 'by_request',
      label: 'By Request',
    },
    {
      type: FIELD_TYPE.TEXT,
      name: 'subject',
      label: 'Subject',
      placeholder: 'Enter Subject',
      validations: {
        required: true,
      },
    },
    {
      type: FIELD_TYPE.LONG_TEXT,
      name: 'notes',
      label: 'Notes',
      placeholder: 'Enter Note',
    },
    {
      type: FIELD_TYPE.BOOLEAN,
      name: 'active',
      label: 'active',
    },
    {
      type: FIELD_TYPE.BOOLEAN,
      name: 'create_another',
      label: 'Create Another',
    },
    {
      type: FIELD_TYPE.BOOLEAN,
      name: 'bulk_create',
      label: 'Bulk Create',
    },
    {
      type: FIELD_TYPE.NUMBER,
      name: 'bulk_create_number',
      defaultValue: 0,
    },
  ],
  logic: [
    {
      condition: {
        type: LOGIC_TYPES.EQUAL,
        ref: 'reintro',
        value: true,
      },
      actions: [
        {
          ref: ['session', 'bill_number'],
          action: LOGIC_ACTIONS.SHOW,
        },
      ],
    },
  ],
};
