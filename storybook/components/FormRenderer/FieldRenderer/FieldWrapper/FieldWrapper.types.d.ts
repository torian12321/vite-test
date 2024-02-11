import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';
export interface FieldWrapperProps {
    name: string;
    label: string;
    sx?: SxProps<Theme>;
    showLabel?: boolean;
    required?: boolean;
    inlineDisplay?: boolean;
    messages?: Message[];
}
export interface LabelProps {
    name: string;
    label: string;
    required?: boolean;
}
export declare enum MESSAGE_SEVERITY {
    DEFAULT = "default",
    SUCCESS = "success",
    INFO = "info",
    ERROR = "error",
    WARNING = "warning"
}
export type Message = {
    message: string;
    severity?: MESSAGE_SEVERITY;
};
export interface HelperTextProps {
    messages?: Message[];
}
