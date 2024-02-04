import type { TextFieldProps } from '@mui/material/TextField';
import type { FieldSlotsComponents } from '@mui/x-date-pickers/internals';
import moment, { Moment } from 'moment';
import { DATE_FORMAT, DATETIME_FORMAT } from '../../../utils/dateUtils';
import type { Properties, Choice } from './Fields.types';
import { commonTextFieldProps } from './SharedTextField';

type SlotProps = TextFieldProps & {
  slotProps: FieldSlotsComponents;
};

export const getFieldChoices = (properties?: Properties): Choice[] => {
  const { choices = [] } = properties || {};

  return choices;
};

export const formatMomentToDateTime = (dateMoment: Moment): string =>
  moment(dateMoment).format(DATETIME_FORMAT);

export const formatMomentToDate = (dateMoment: Moment): string =>
  moment(dateMoment).format(DATE_FORMAT);

export const getTodayDate = (): string => formatMomentToDate(moment());

export const getTodayDateTime = (): string => formatMomentToDate(moment());

/**
 * Funtionallity for `DatePicker` and `DateTimePicker` only to be used in TextField slot
 *
 * Destructure params + combine it with common ones.
 * Remove `slotProps` on the new object to avoid UI error.
 */
export const getSlotPropsTextField = (
  params: TextFieldProps,
): TextFieldProps => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { slotProps, ...restParams } = params as SlotProps;

  return {
    ...commonTextFieldProps,
    ...restParams,
  };
};
