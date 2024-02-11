/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export declare const isObject: (obj: unknown) => boolean;
export declare const isEmpty: (obj: object) => boolean;
export declare const get: (o: object, s: string) => object | undefined;
/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation.
 *
 * @param {...object} objects - Objects to merge
 * @returns {object} New object with merged key/values
 */
export declare const mergeDeep: (...objects: {
    [key: string]: unknown;
}[]) => {
    [key: string]: unknown;
};
