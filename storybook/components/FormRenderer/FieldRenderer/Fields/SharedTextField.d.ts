import type { TextFieldProps } from '@mui/material/TextField';
export interface SharedTextFieldProps extends Omit<TextFieldProps, 'onChange'> {
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
export declare const commonTextFieldProps: TextFieldProps;
export declare const SharedTextField: ({ name, rows, onChange, loading, ...rest }: SharedTextFieldProps) => JSX.Element;
