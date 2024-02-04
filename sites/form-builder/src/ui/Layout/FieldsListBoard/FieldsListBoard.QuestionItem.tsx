import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useAppSelector } from "../../../store/actions";
import { useGetFieldById } from "../../../store/selectors/fields.selectors";
import { useSettingsActions } from "../../../store/actions/settings";
import { getSelectedField } from "../../../store/selectors/settings.selectors";
import { QuestionsItemText, ListItemButton } from "./FieldsListBoard.styles";
import { ICONS } from "./FieldsListBoard.icons";

interface Props {
  fieldId: string;
}

export const QuestionItem = ({ fieldId }: Props) => {
  const selectedField = useAppSelector(getSelectedField);
  const { setSelectedField, unsetSelectedField } = useSettingsActions();
  const { label, type } = useGetFieldById(fieldId);

  const handleOnClick = () => {
    if (selectedField === fieldId) {
      unsetSelectedField();
    } else {
      setSelectedField(fieldId);
    }
  };

  return (
    <ListItem disablePadding onClick={handleOnClick}>
      <ListItemButton isActive={selectedField === fieldId}>
        <ListItemIcon>{ICONS[type] || <InboxIcon />}</ListItemIcon>
        <QuestionsItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};
