import { FIELD_TYPE } from '../FormRenderer.constants';
import { mockOptions } from './mockFormUtils';
import type { FormData } from './mockFormUtils';

export const formExampleWorkflow: FormData = {
  fields: [
    {
      type: FIELD_TYPE.DROPDOWN,
      name: 'assignee',
      placeholder: '--Assign--',
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: FIELD_TYPE.TEXT,
      name: 'note',
      placeholder: 'Note to assignee',
    },
    {
      type: FIELD_TYPE.FILE_UPLOAD,
      name: 'attachment',
      placeholder: 'Drop a file or click to upload',
    },
  ],
};
