import type { Choice } from '../FieldRenderer';
import type { Field, FormLogic } from '../FormRenderer.types';

export interface FormData {
  fields: Field[];
  logic?: FormLogic[];
}

export const mockOptions: Choice[] = [
  { value: 'chamber_house', label: 'House' },
  { value: 'chamber_senate', label: 'Senate', disabled: true },
  { value: 'chamber_both', label: 'Both' },
];
