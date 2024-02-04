import { styled } from '@mui/material/styles';
import { SxProps } from '@mui/system';

export const SBCode = styled('pre')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(12),
  lineHeight: 1.2,
}));
export const SBTabBody = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(3.5),

  '& > *': {
    minWidth: '200px',
    maxWidth: '840px',
    flexGrow: 1,
  },
}));

// CreateRequest Styles
export const stylesHalfRow: SxProps = {
  width: '50%',
};
export const stylesInlined: SxProps = {
  display: 'inline-block',
};

export const stylesLastRow: SxProps = {
  width: '25%',
  display: 'inline-block',

  '& > div': {
    flexDirection: 'row',
    alignItems: 'center',
  },
  '.MuiCheckbox-root': {
    padding: 0,
  },
};
