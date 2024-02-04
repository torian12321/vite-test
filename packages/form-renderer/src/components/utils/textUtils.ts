export const isString = (val: unknown): val is string =>
  typeof val === 'string';

// export const underscoreSepToSpace = (str?: string): string =>
//   str ? str.replaceAll('_', ' ') : '';

export const capitalise = (sentence?: string): string => {
  if (sentence === '' || !sentence) {
    return '';
  }
  return sentence
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ');
};

export const capitaliseFirstLetter = (sentence?: string): string =>
  capitalise(sentence?.toLowerCase() || '');

export const camelToSnakeCase = (str: string) =>
  str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
