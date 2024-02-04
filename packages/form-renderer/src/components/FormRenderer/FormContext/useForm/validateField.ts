/* eslint-disable @typescript-eslint/naming-convention */
import { capitaliseFirstLetter } from '../../../utils/textUtils';
import type { Message } from '../../FieldRenderer';
import { MESSAGE_SEVERITY } from '../../FieldRenderer';
import { FIELD_TYPE } from '../../FormRenderer.constants';
import type { FormField } from '../../FormRenderer.types';
import type { ValidateField, AllValidations } from './useForm.types';

const getMessageRequired = (field: FormField): string => {
  const { label, type } = field;
  const styledLabel = capitaliseFirstLetter(label);
  let messageText = 'Please make a selection';

  if (styledLabel.trim() !== '') {
    switch (type) {
      case FIELD_TYPE.DROPDOWN:
      case FIELD_TYPE.OPTIONS_LIST:
      case FIELD_TYPE.RADIO_BUTTON:
        messageText = `Select a valid ${styledLabel}`;
        break;
      case FIELD_TYPE.TEXT:
      default:
        messageText = `Please enter a ${styledLabel}`;
        break;
    }
  } else if (type === FIELD_TYPE.FILE_UPLOAD) {
    messageText = 'Select a valid File';
  }

  return messageText;
};

const isEmptyArray = (value: unknown): boolean =>
  Array.isArray(value) && !value.length;

export const validateField = (field: FormField): ValidateField => {
  const messages: Message[] = [];
  const { value, validations = {} } = field;
  const {
    required = false,
    min_length,
    max_length,
    min,
    max,
  } = validations as AllValidations;

  const addErrorMessage = (message: string): void => {
    messages.push({
      message,
      severity: MESSAGE_SEVERITY.ERROR,
    });
  };

  if (required && (!value || isEmptyArray(value))) {
    addErrorMessage(getMessageRequired(field));
  }

  // String validations
  if (min_length && value.length < min_length) {
    addErrorMessage(`Min characters: ${min_length}`);
  }
  if (max_length && value.length > max_length) {
    addErrorMessage(`Max characters: ${max_length}`);
  }

  // Numberic validations
  if (min && value < min) {
    addErrorMessage(`Please enter a number bigger than ${min}`);
  }
  if (max && value > max) {
    addErrorMessage(`Please enter a number smaller than ${max}`);
  }

  return {
    messages,
    isValid: !messages.some(
      message => message.severity === MESSAGE_SEVERITY.ERROR,
    ),
  };
};
