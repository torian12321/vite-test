import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import { Wrapper } from "./FieldDetailsBoard.styles";
import { FieldDetailsForm } from "./FieldDetailsForm";

export const FieldDetailsBoard = () => {
  return (
    <Wrapper>
      <Toolbar />
      <Divider />
      <FieldDetailsForm />
    </Wrapper>
  );
};
