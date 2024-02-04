import type { TextFieldProps } from "@mui/material/TextField";
import type { PickersActionBarAction } from "@mui/x-date-pickers";
import { AdapterMoment as MuiAdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DesktopDateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { LocalizationProvider as MuiLocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import moment, { Moment } from "moment";
import { FIELD_TYPE } from "../../FormRenderer.constants";
import type { FieldProps } from "./Fields.types";
import { formatMomentToDateTime, getSlotPropsTextField } from "./Fields.utils";

export const DateTimeField = ({
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
  if (type !== FIELD_TYPE.DATE_TIME) return null;

  const fieldValue = value ? moment(value) : null;
  const actionBarButtons: PickersActionBarAction[] = required
    ? ["today"]
    : ["clear", "today"];

  const handleOnChange = (newValue: Moment | null) => {
    if (!newValue) {
      onChange(null);
    } else {
      const stringDate = formatMomentToDateTime(newValue);
      onChange(stringDate);
    }
  };

  return (
    <MuiLocalizationProvider
      dateAdapter={MuiAdapterMoment}
      adapterLocale="en-US"
    >
      <MuiDateTimePicker
        ampm
        ampmInClock
        format="MM/DD/YYYY hh:mm a"
        label={label}
        value={fieldValue}
        disabled={disabled}
        onChange={handleOnChange}
        onAccept={onBlur}
        viewRenderers={{
          hours: renderTimeViewClock,
          minutes: renderTimeViewClock,
          seconds: null,
        }}
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
