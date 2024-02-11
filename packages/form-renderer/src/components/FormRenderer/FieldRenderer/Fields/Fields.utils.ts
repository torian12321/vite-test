import type { TextFieldProps } from '@mui/material/TextField'
import type { FieldSlotsComponents } from '@mui/x-date-pickers/internals'
import type { Properties, Choice } from './Fields.types'
import { commonTextFieldProps } from './SharedTextField'
import dayjs, { Dayjs } from 'dayjs'

export const US_DATE_FORMAT = 'MM/DD/YYYY'
export const DATETIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss'
export const DATE_FORMAT = 'YYYY-MM-DD'

type SlotProps = TextFieldProps & {
  slotProps: FieldSlotsComponents
}

export const getFieldChoices = (properties?: Properties): Choice[] => {
  const { choices = [] } = properties || {}

  return choices
}

export const formatDayjsToDateTime = (date: Dayjs): string =>
  dayjs(date).format(DATETIME_FORMAT)

export const formatDayjsToDate = (date: Dayjs): string =>
  dayjs(date).format(DATE_FORMAT)

export const getTodayDate = (): string => formatDayjsToDate(dayjs())

export const getTodayDateTime = (): string => formatDayjsToDate(dayjs())

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
  const { slotProps, ...restParams } = params as SlotProps

  return {
    ...commonTextFieldProps,
    ...restParams,
  }
}
