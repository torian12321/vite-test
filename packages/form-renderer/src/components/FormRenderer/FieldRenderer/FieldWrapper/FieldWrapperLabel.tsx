import { Label, LabelAsterisk } from './FieldWrapper.styles';
import type { LabelProps } from './FieldWrapper.types';

export const FieldLabel = ({
  label = '',
  name = '',
  required = false,
}: LabelProps): JSX.Element => (
  <Label htmlFor={name}>
    {label}
    {required && <LabelAsterisk />}
  </Label>
);
