import {
  getTodayDate,
  getTodayDateTime,
} from './FieldRenderer/Fields/Fields.utils';
import { FormFields } from './FormContext/useForm/useForm.types';
import { FIELD_TYPE, emptyFieldValues } from './FormRenderer.constants';
import type { FieldValue, Field, DefaultValues } from './FormRenderer.types';

export const setInitialFormFields = (
  fields: Field[],
  defaultValues: DefaultValues = {},
): FormFields =>
  fields.reduce((acc, field) => {
    const { type, name, defaultValue = undefined, properties = {} } = field;

    // Try to get fisrt the value set on FormRenderer, and if not set, the one on the field itself
    let value: FieldValue = defaultValues[name] || defaultValue;

    if (!value) {
      switch (type) {
        case FIELD_TYPE.RADIO_BUTTON: {
          const { choices = [] } = properties;
          value = choices.length ? choices[0].value : undefined;
          break;
        }
        default:
          value = emptyFieldValues[type];
          break;
      }
    }

    /* ----------------------- */
    /* Cover special scenarios */
    /* ----------------------- */
    if (value === 'today') {
      switch (type) {
        case FIELD_TYPE.DATE:
          value = getTodayDate();
          break;
        case FIELD_TYPE.DATE_TIME:
          value = getTodayDateTime();
          break;
        default:
          break;
      }
    }

    return {
      ...acc,
      [name]: {
        ...field,
        value,
        messages: [],
        visible: true,
        isValid: true,
        touched: false,
      },
    };
  }, {});
