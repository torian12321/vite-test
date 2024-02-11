import type { TextFieldProps } from '@mui/material/TextField';
import type { Properties, Choice } from './Fields.types';
import { Dayjs } from 'dayjs';
export declare const US_DATE_FORMAT = "MM/DD/YYYY";
export declare const DATETIME_FORMAT = "YYYY-MM-DDTHH:mm:ss";
export declare const DATE_FORMAT = "YYYY-MM-DD";
export declare const getFieldChoices: (properties?: Properties) => Choice[];
export declare const formatDayjsToDateTime: (date: Dayjs) => string;
export declare const formatDayjsToDate: (date: Dayjs) => string;
export declare const getTodayDate: () => string;
export declare const getTodayDateTime: () => string;
/**
 * Funtionallity for `DatePicker` and `DateTimePicker` only to be used in TextField slot
 *
 * Destructure params + combine it with common ones.
 * Remove `slotProps` on the new object to avoid UI error.
 */
export declare const getSlotPropsTextField: (params: TextFieldProps) => TextFieldProps;
