import moment, { Moment } from 'moment';

export type DateTypes = string | undefined | null;

export const US_DATE_FORMAT = 'MM/DD/YYYY';
export const DATETIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss';
export const DATE_FORMAT = 'YYYY-MM-DD';

export const formatDateUs = (dateString: DateTypes): string => {
  if (!dateString) return '';
  return moment(dateString, [DATE_FORMAT, DATETIME_FORMAT]).format(
    US_DATE_FORMAT,
  );
};

export const formatDateUsUtc = (dateString: DateTypes): string => {
  if (!dateString) return '';
  return moment.utc(dateString).format(US_DATE_FORMAT);
};

export const formatDateTime = (dateString: DateTypes): Moment => {
  if (dateString && dateString !== 'Invalid Date' && dateString !== 'null')
    return moment(dateString, [
      `${DATETIME_FORMAT}.SSSZ`,
      'ddd MMM DD YYYY HH:mm:ss',
    ]);
  else {
    return moment(new Date());
  }
};

export const formatDate = (dateString: DateTypes): Moment => {
  if (dateString && dateString !== 'Invalid Date' && dateString !== 'null')
    return moment(dateString, [DATE_FORMAT, 'ddd MMM DD YYYY']);
  else {
    return moment(new Date());
  }
};

export const getDateNow = (format: string = DATE_FORMAT): string =>
  moment().format(format).toString();

export const getDateTimeNow = (format: string = DATETIME_FORMAT): string =>
  moment().format(format).toString();

export const getCurrentYear = (): number => new Date().getFullYear();

export const formatTime = (dateString: DateTypes): string => {
  if (!dateString) return '';
  const formatedTime = moment(dateString, [
    DATE_FORMAT,
    DATETIME_FORMAT,
  ]).format('HH:mm');
  if (moment([formatedTime]).isDST()) {
    return formatedTime;
  } else {
    const duration = moment.duration({ hours: 1 });
    return moment(dateString, [DATE_FORMAT, DATETIME_FORMAT])
      .add(duration)
      .format('HH:mm');
  }
};
