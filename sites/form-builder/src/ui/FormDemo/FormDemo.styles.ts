import { styled } from '@mui/material/styles';
import { SxProps, Theme } from '@mui/material';

export const Wrapper = styled('section')({
  width: 460,
  margin: 'auto',
});

export const unselectedFieldStyles: SxProps<Theme> = {
  opacity: .4,
  transition: 'opacity .6s',
  borderRadius: '8px',
};
export const selectedFieldStyles: SxProps<Theme> = {
  opacity: 1,
  outline: '#b5d3f1 2px solid',
};
