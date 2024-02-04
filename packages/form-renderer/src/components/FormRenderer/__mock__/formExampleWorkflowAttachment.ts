import { FIELD_TYPE } from '../FormRenderer.constants';
import type { FormData } from './mockFormUtils';

export const formExampleWorkflowAttachment: FormData = {
  fields: [
    {
      type: FIELD_TYPE.TEXT,
      name: 'note',
      label: 'Add Note',
      placeholder: 'Add Note...',
    },
    {
      type: FIELD_TYPE.FILE_UPLOAD,
      name: 'attachment',
      validations: {
        required: true,
      },
    },
  ],
};
