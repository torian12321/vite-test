import { HelperTextWrapper, HelperMessage } from './FieldWrapper.styles';
import type { HelperTextProps } from './FieldWrapper.types';

export const HelperText = ({
  messages = [],
}: HelperTextProps): JSX.Element | null => {
  const hasMessages = Boolean(messages.length > 0);

  return (
    <HelperTextWrapper isOpen={hasMessages} aria-hidden={!hasMessages}>
      {messages.map(({ message, severity }, index) => (
        <HelperMessage key={index} severity={severity}>
          {message}
        </HelperMessage>
      ))}
    </HelperTextWrapper>
  );
};
