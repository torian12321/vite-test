import { FIELD_TYPE } from '../../FormRenderer.constants';
import type { FieldProps } from './Fields.types';
import { SharedTextField } from './SharedTextField';

export const LongTextField = (props: FieldProps): JSX.Element | null => {
  if (props.type !== FIELD_TYPE.LONG_TEXT) return null;

  return <SharedTextField {...props} rows={3} />;
};
