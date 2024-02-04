import type { TextFieldProps } from "@mui/material/TextField";
import type { PickersActionBarAction } from "@mui/x-date-pickers";
import { AdapterMoment as MuiAdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DesktopDatePicker as MuiDesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider as MuiLocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment, { Moment } from "moment";
import { FIELD_TYPE } from "../../FormRenderer.constants";
import type { FieldProps } from "./Fields.types";
import { formatMomentToDate, getSlotPropsTextField } from "./Fields.utils";

export const DateField = ({
  type,
  label,
  name,
  value,
  error,
  disabled = false,
  required = false,
  onChange,
  onBlur,
}: FieldProps): JSX.Element | null => {
  if (type !== FIELD_TYPE.DATE) return null;

  const fieldValue = value ? moment(value) : null;
  const actionBarButtons: PickersActionBarAction[] = required
    ? ["today"]
    : ["clear", "today"];

  const handleOnChange = (newValue: Moment | null) => {
    if (!newValue) {
      onChange(null);
    } else {
      const stringDate = formatMomentToDate(newValue);
      onChange(stringDate);
    }
  };

  return (
    <MuiLocalizationProvider
      dateAdapter={MuiAdapterMoment}
      adapterLocale="en-US"
    >
      <MuiDesktopDatePicker
        format="MM/DD/YYYY"
        label={label}
        value={fieldValue}
        disabled={disabled}
        onChange={handleOnChange}
        onAccept={onBlur}
        slotProps={{
          actionBar: {
            actions: actionBarButtons,
          },
          textField: (params: TextFieldProps) => ({
            ...getSlotPropsTextField(params),
            error,
            name,
            id: name,
            onBlur,
          }),
        }}
      />
    </MuiLocalizationProvider>
  );
};
