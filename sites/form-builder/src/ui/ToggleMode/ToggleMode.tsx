import DataObjectIcon from "@mui/icons-material/DataObject";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import { MODES } from "../../store/slices/settings.slice";
import { useSettingsActions } from "../../store/actions/settings";
import { useAppSelector } from "../../store/actions";
import { getDisplayMode } from "../../store/selectors/settings.selectors";
import { Toggle } from "./ToggleMode.styles";

export const ToggleMode = () => {
  const displayMode = useAppSelector(getDisplayMode);
  const { setCodeMode, setVisualMode } = useSettingsActions();

  const control = {
    value: displayMode,
    exclusive: true,
  };

  return (
    <Stack spacing={2} alignItems="center">
      <Toggle size="small" {...control} aria-label="Display Mode">
        <ToggleButton
          value={MODES.VISUAL}
          key={MODES.VISUAL}
          onClick={setVisualMode}
        >
          <VisibilityIcon />
        </ToggleButton>
        <ToggleButton value={MODES.CODE} key={MODES.CODE} onClick={setCodeMode}>
          <DataObjectIcon />
        </ToggleButton>
      </Toggle>
    </Stack>
  );
};
