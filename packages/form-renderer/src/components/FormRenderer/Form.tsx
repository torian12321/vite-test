import { PropsWithChildren, FormEvent, useEffect } from 'react';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useFormContext } from './FormContext';
import type { FormProps } from './FormRenderer.types';

const StyledFieldset = styled('fieldset')({
  padding: 0,
  border: 0,
  margin: 0,
  background: 'transparent',
});

export const Form = ({
  children,
  id,
  sx,
  disabled = false,
  onChange,
}: PropsWithChildren<FormProps>): JSX.Element => {
  const { onSubmit, values } = useFormContext();

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  useEffect(() => {
    if (onChange) {
      onChange({
        values,
      });
    }
  }, [values, onChange]);

  return (
    <MuiBox
      component='form'
      autoComplete='off'
      noValidate
      id={id}
      sx={sx}
      onSubmit={handleOnSubmit}
    >
      <StyledFieldset disabled={disabled}>{children}</StyledFieldset>
    </MuiBox>
  );
};
