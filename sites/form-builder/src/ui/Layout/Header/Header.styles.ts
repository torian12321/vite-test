import { styled } from '@mui/material/styles';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export const Wrapper = styled(AppBar)({
  position: 'relative',
});

export const Content = styled(Toolbar)({
  justifyContent: 'space-between',
});
