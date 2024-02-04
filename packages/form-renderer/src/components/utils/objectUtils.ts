/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export const isObject = (obj: unknown): boolean =>
  typeof obj === 'object' && !Array.isArray(obj) && obj !== null;

export const isEmpty = (obj: object): boolean => {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
};

export const get = (o: object, s: string) => {
  s = s.replace(/\[(\w+)\]/g, '.$1');
  s = s.replace(/^\./, '');
  const a = s.split('.');

  for (let i = 0, n = a.length; i < n; ++i) {
    const k = a[i];
    if (k in o) {
      // eslint-disable-next-line
      // @ts-ignore
      o = o[k];
    } else {
      return;
    }
  }
  return o;
};

/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation.
 *
 * @param {...object} objects - Objects to merge
 * @returns {object} New object with merged key/values
 */
export const mergeDeep = (...objects: { [key: string]: unknown }[]) =>
  objects.reduce((prev, obj) => {
    Object.keys(obj).forEach(key => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal);
      } else if (isObject(pVal) && isObject(oVal)) {
        // eslint-disable-next-line
        // @ts-ignore
        prev[key] = mergeDeep(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });

    return prev;
  }, {});
