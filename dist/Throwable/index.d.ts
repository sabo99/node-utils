/**
 * Creates a throwable function based on a condition and type.
 * @param {Function} condition - The condition to check.
 * @param {string} type - The type to validate against.
 * @returns {Function} A function that throws an error if the condition is not met.
 */
export function createThrowable(condition: Function, type: string): Function;
/**
 * Throws an error if the value is missing (null or undefined).
 * @type {Function}
 */
export const throwIfMissing: Function;
/**
 * Throws an error if the value is not a string.
 * @type {Function}
 */
export const throwIfNotString: Function;
/**
 * Throws an error if the value is not an object.
 * @type {Function}
 */
export const throwIfNotObject: Function;
/**
 * Throws an error if the value is not an array.
 * @type {Function}
 */
export const throwIfNotArray: Function;
