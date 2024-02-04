import Typography from "@mui/material/Typography";
import { Wrapper, Content } from "./Header.styles";
import { ToggleMode } from "../../ToggleMode";

export const Header = () => (
  <Wrapper>
    <Content>
      <Typography variant="h6" noWrap component="div">
        Form Builder
      </Typography>
      <ToggleMode />
    </Content>
  </Wrapper>
);
