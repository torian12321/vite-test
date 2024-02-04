import {
  FIELD_TYPE,
  LOGIC_TYPES,
  LOGIC_ACTIONS,
} from '../FormRenderer.constants';
import type { FormData } from './mockFormUtils';

export const formWithLogic: FormData = {
  fields: [
    {
      type: FIELD_TYPE.TEXT,
      name: 'name',
      label: 'name',
    },
    {
      type: FIELD_TYPE.LONG_TEXT,
      name: 'surname',
      label: 'surname',
    },
    {
      type: FIELD_TYPE.NUMBER,
      name: 'age',
      label: 'age',
    },
    {
      type: FIELD_TYPE.BOOLEAN,
      name: 'buy_lottery',
      label: 'Do you want to buy Lottery?',
    },
    {
      type: FIELD_TYPE.INFO_MESSAGE,
      name: 'moderation_message',
      label: 'Warning',
      placeholder: 'Play in moderation and responsibly',
    },
  ],
  logic: [
    {
      condition: {
        type: LOGIC_TYPES.EQUAL,
        ref: 'buy_lottery',
        value: true,
      },
      actions: [
        {
          ref: 'age',
          action: LOGIC_ACTIONS.MAKE_MANDATORY,
        },
        {
          ref: 'moderation_message',
          action: LOGIC_ACTIONS.SHOW,
        },
      ],
    },
  ],
};
