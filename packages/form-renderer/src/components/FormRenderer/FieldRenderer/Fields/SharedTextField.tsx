import type { ChangeEvent } from "react";
import MuiTextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";

export interface SharedTextFieldProps extends Omit<TextFieldProps, "onChange"> {
  rows?: number;
  loading?: boolean;
  onChange?: (value: string) => void;
}

/**
 * SharedTextField is a text field used in multiple components,
 * The sared props will help to keep consistent styles on formFields
 *
 * It is used on:
 *  - DateField (commonTextFieldProps only)
 *  - DateTimeField (commonTextFieldProps only)
 *  - LongTextField
 *  - NumericField
 *  - SelectField
 *  - TextField
 */

export const commonTextFieldProps: TextFieldProps = {
  size: "small",
  variant: "outlined",
  type: "text",
  fullWidth: true,
  rows: 1,
  multiline: false,
};

export const SharedTextField = ({
  name,
  rows = 1,
  onChange,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loading = false, // `loadign` added here to avoid to have it on `rest` and pass it down to `<MuiTextField />`
  ...rest
}: SharedTextFieldProps): JSX.Element => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;

    if (onChange) {
      onChange(val);
    }
  };

  return (
    <MuiTextField
      {...rest}
      {...commonTextFieldProps}
      id={name}
      name={name}
      rows={rows}
      multiline={Boolean(rows > 1)}
      onChange={handleOnChange}
    />
  );
};
