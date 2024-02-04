import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  position: 'absolute',
  inset: 0,
});

export const Content = styled('div')({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
});
