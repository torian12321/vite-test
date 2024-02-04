import Alert from '@mui/material/Alert';
import { FIELD_TYPE } from '../../FormRenderer.constants';
import { InfoMessageTitle, InfoMessageBody } from './Fields.styles';
import type { FieldProps } from './Fields.types';

export const InfoMessage = ({
  type,
  label,
  placeholder,
}: FieldProps): JSX.Element | null => {
  if (type !== FIELD_TYPE.INFO_MESSAGE) return null;

  return (
    <Alert severity='info' icon={false}>
      {label && (
        <InfoMessageTitle>
          <strong>{label}</strong>
        </InfoMessageTitle>
      )}
      {placeholder && <InfoMessageBody>{placeholder}</InfoMessageBody>}
    </Alert>
  );
};
