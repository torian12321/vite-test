import { FIELD_TYPE } from 'form-renderer'
import type { Field } from 'form-renderer'

const capitalizeFirstLetter = (st: string): string =>
  st.charAt(0).toUpperCase() + st.slice(1)

export const FORM_FIELDS: Field[] = [
  {
    name: 'type',
    label: 'type',
    type: FIELD_TYPE.DROPDOWN,
    validations: {
      required: true,
    },
    properties: {
      choices: Object.values(FIELD_TYPE).map((fieldType: FIELD_TYPE) => ({
        value: fieldType,
        label: capitalizeFirstLetter(fieldType.replaceAll('_', ' ')),
      })),
    },
  },
  {
    name: 'name',
    label: 'name',
    type: FIELD_TYPE.TEXT,
    validations: {
      required: true,
    },
  },
  {
    name: 'label',
    label: 'label',
    type: FIELD_TYPE.TEXT,
  },
  {
    name: 'placeholder',
    label: 'placeholder',
    type: FIELD_TYPE.TEXT,
  },
  {
    name: 'disabled',
    label: 'disabled',
    type: FIELD_TYPE.BOOLEAN,
  },
]
