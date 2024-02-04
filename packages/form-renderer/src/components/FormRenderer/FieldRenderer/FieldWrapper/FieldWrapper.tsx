import type { PropsWithChildren } from 'react';
import MuiBox from '@mui/material/Box';
import { Wrapper, FieldContainer, FieldBox } from './FieldWrapper.styles';
import { FieldWrapperProps } from './FieldWrapper.types';
import { HelperText } from './FieldWrapperHelperText';
import { FieldLabel } from './FieldWrapperLabel';

export const FieldWrapper = ({
  children,
  name = '',
  label,
  messages = [],
  required = false,
  sx,
  inlineDisplay = false,
  showLabel = true,
}: PropsWithChildren<FieldWrapperProps>): JSX.Element => {
  const hasLabel = label && showLabel;

  return (
    <Wrapper sx={sx}>
      <FieldContainer inlineDisplay={inlineDisplay}>
        {hasLabel && (
          <FieldLabel name={name} label={label} required={required} />
        )}
        <FieldBox>
          <MuiBox>{children}</MuiBox>
          <HelperText messages={messages} />
        </FieldBox>
      </FieldContainer>
    </Wrapper>
  );
};

export default FieldWrapper;
