import { styled } from '@mui/material/styles';
import MuiList from "@mui/material/List";
import MuiListItemText from "@mui/material/ListItemText";
import MuiListItemButton from "@mui/material/ListItemButton";

export const Wrapper = styled('div')({
  height: '100%',
  width: 240,
  display: 'flex',
  flexDirection: 'column',
  background: 'white',
  borderRight: '1px solid #e0e0e0',
});


export const QuestionsList = styled(MuiList)({
  flexGrow: 1,
  overflowY: 'auto',
});

export const FooterButton = styled('button')({
  borderRadius: 0,
});

export const QuestionsItemText = styled(MuiListItemText)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': '2',
  '-webkit-box-orient': 'vertical',
});

interface ListItemButtonProps {
  isActive?: boolean;
}

export const ListItemButton = styled(MuiListItemButton, {
  shouldForwardProp: (prop) => !["isActive"].includes(prop as string),
})<ListItemButtonProps>(({ isActive = false }) => ({
  borderLeft: '4px solid transparent',
  borderRight: '4px solid transparent',

  ...(isActive && {
    background: '#e7f3ff',
    borderLeftColor: '#1976d2',
  })
}));
