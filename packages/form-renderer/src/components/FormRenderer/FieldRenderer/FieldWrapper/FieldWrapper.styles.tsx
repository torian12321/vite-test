import type { Theme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { MESSAGE_SEVERITY } from "./FieldWrapper.types";

export const Wrapper = styled("div")(({ theme }) => ({
  display: "block",
  width: "100%",
  padding: theme.spacing(1),
  boxSizing: "border-box",
}));

interface FieldContainerProps {
  inlineDisplay?: boolean;
}
export const FieldContainer = styled("div", {
  shouldForwardProp: (prop) => !["inlineDisplay"].includes(prop as string),
})<FieldContainerProps>(({ theme, inlineDisplay = false }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,

  ...(inlineDisplay && {
    flexDirection: "row",

    Label: {
      minWidth: "140px",
      maxWidth: "240px",
      width: "20%",
      lineHeight: 1.2,
      paddingTop: theme.spacing(1),
    },
  }),
}));

interface FieldContainerProps {
  isOpen?: boolean;
}

export const FADE_IN_DELAY = 600; /** In ms */
export const HelperTextWrapper = styled("ul", {
  shouldForwardProp: (prop) => !["isOpen"].includes(prop as string),
})<FieldContainerProps>(({ theme, isOpen = false }) => ({
  listStyle: "none",
  padding: 0,
  margin: `0 ${theme.spacing(0.5)}`,

  // Fade-in animation styles
  maxHeight: 0,
  overflow: "hidden",
  boxSizing: "border-box",
  transition: `max-height ${FADE_IN_DELAY / 1000}s ease-in-out`,

  ...(isOpen && {
    maxHeight: 100,
  }),
}));

const getTextColor = (theme: Theme, severity?: MESSAGE_SEVERITY): string => {
  const textColor: Record<MESSAGE_SEVERITY, string> = {
    [MESSAGE_SEVERITY.SUCCESS]: theme.palette.success.dark,
    [MESSAGE_SEVERITY.INFO]: theme.palette.info.dark,
    [MESSAGE_SEVERITY.WARNING]: theme.palette.warning.main,
    [MESSAGE_SEVERITY.ERROR]: theme.palette.error.main,
    [MESSAGE_SEVERITY.DEFAULT]: theme.palette.text.secondary,
  };

  return textColor[severity || MESSAGE_SEVERITY.DEFAULT];
};

interface HelperMessageProps {
  severity?: MESSAGE_SEVERITY;
}
export const HelperMessage = styled("li", {
  shouldForwardProp: (prop) => prop !== "severity",
})<HelperMessageProps>(({ theme, severity }) => ({
  fontSize: "12px",
  margin: `${theme.spacing(0.5)} ${theme.spacing(1.5)} 0`,
  color: getTextColor(theme, severity),

  "&:first-letter": {
    textTransform: "uppercase",
  },
}));

export const FieldBox = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  padding: 0,
  margin: 0,
});

export const Label = styled("label")(({ theme }) => ({
  marginRight: theme.spacing(1.5),
  marginBottom: "2px",
  color: theme.palette.text.secondary,
  fontWeight: "bold",
  textTransform: "uppercase",
  lineHeight: 1,
  textAlign: "start",
}));
export const LabelAsterisk = styled("span")(({ theme }) => ({
  color: theme.palette.error.main,
  marginLeft: theme.spacing(0.5),
  "&:after": {
    content: '"*"',
  },
}));
