import MuiTypography from '@mui/material/Typography';
import { styled, Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

export const fileInputStyles: SxProps<Theme> = {
  width: '100%',
  padding: '1rem',
  boxSizing: 'border-box',
  border: '2px dashed  #ccc',
  textAlign: 'center',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  '& .MuiButton-root, & .MuiIconButton-root': {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
  },
  '& .MuiLinearProgress-root': {
    position: 'absolute',
    bottom: 0,
    width: 'calc(100% - 2rem)',
  },
  '& .MuiFormHelperText-root': {
    position: 'absolute',
    bottom: '-1.3rem',
    textAlign: 'center',
    width: 'calc(100% - 2rem)',
    color: 'error.main',
  },
};

export const filesToUploadStyles: SxProps<Theme> = {
  display: 'flex',
  width: 'calc(100% - 40px)',
  fontSize: '14px',
  mt: '4px',
  '&.error': {
    color: 'error.main',
  },
  '& .iconwrap': {
    display: 'flex',
    height: '100%',
    cursor: 'pointer',
    '&:hover': {
      color: 'action.disabled',
    },
  },
};

interface PlaceholderBoxProps {
  error?: boolean;
}
export const PlaceholderBox = styled(MuiTypography, {
  shouldForwardProp: prop => !['error'].includes(prop as string),
})<PlaceholderBoxProps>(({ theme, error = false }) => ({
  width: 'calc(100% - 40px)',
  textAlign: 'left',
  color: error ? theme.palette.error.main : 'initial',
}));
