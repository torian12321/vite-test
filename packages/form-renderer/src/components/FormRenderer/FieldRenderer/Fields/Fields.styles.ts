import { SxProps, Theme } from '@mui/material';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const radioButtonItemStyle: SxProps<Theme> = {
  '.Mui-disabled': {
    cursor: 'not-allowed',
  },
};

export const InfoListHeader = styled(MuiAccordionSummary)(({ theme }) => ({
  flexDirection: 'row-reverse',

  '.MuiAccordionSummary-expandIconWrapper': {
    transform: 'rotate(-90deg)',
    '&.Mui-expanded': {
      transform: 'rotate(0)',
    },
  },
  '& .MuiAccordionSummary-content': {
    '&, &.Mui-expanded': {
      marginLeft: theme.spacing(1),
    },
  },
}));

export const InfoMessageTitle = styled(AlertTitle)({
  margin: 0,
});
export const InfoMessageBody = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(0.5),
}));

export const InfoListHeaderTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 'bold',
}));
export const InfoListItem = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  marginBottom: theme.spacing(0.5),
  color: theme.palette.text.secondary,
}));
export const InfoListItemLabel = styled('div')({
  minWidth: '120px',
  maxWidth: '180px',
  width: '20%',
  fontWeight: 'bold',
});
export const InfoListItemValue = styled('div')({
  flexGrow: '1',
});

export const loaderStyles: SxProps<Theme> = {
  position: 'absolute',
  right: '36px',
  top: 'calc(50% - 6px)',
};
