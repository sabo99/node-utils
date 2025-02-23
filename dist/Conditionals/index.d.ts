/**
 * Checks if a value is null.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is null, otherwise false.
 */
export function isNull(value: any): boolean;
/**
 * Checks if a value is undefined.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is undefined, otherwise false.
 */
export function isUndefined(value: any): boolean;
/**
 * Checks if a value is either null or undefined.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is null or undefined, otherwise false.
 */
export function isMissing(value: any): boolean;
/**
 * Checks if a value is present (not null or undefined).
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is present, otherwise false.
 */
export function isPresent(value: any): boolean;
/**
 * Checks if a value is a string.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a string, otherwise false.
 */
export function isString(value: any): boolean;
/**
 * Checks if a value is a boolean.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a boolean, otherwise false.
 */
export function isBoolean(value: any): boolean;
/**
 * Checks if a value is a function.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a function, otherwise false.
 */
export function isFunction(value: any): boolean;
/**
 * Checks if a value is an array.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an array, otherwise false.
 */
export function isArray(value: any): boolean;
/**
 * Checks if two values are equal.
 * @param {*} value1 - The first value to compare.
 * @param {*} value2 - The second value to compare.
 * @returns {boolean} True if the values are equal, otherwise false.
 */
export function isEqual(value1: any, value2: any): boolean;
/**
 * Checks if a value is an empty string.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an empty string, otherwise false.
 */
export function isEmptyString(value: any): boolean;
/**
 * Checks if a value is a non-empty string.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a non-empty string, otherwise false.
 */
export function isNonEmptyString(value: any): boolean;
/**
 * Checks if a value is an empty array.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an empty array, otherwise false.
 */
export function isEmptyArray(value: any): boolean;
/**
 * Checks if a value is a non-empty array.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a non-empty array, otherwise false.
 */
export function isNonEmptyArray(value: any): boolean;
/**
 * Checks if a value is an object.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an object, otherwise false.
 */
export function isObject(value: any): boolean;
/**
 * Checks if an object is empty (has no properties or symbols).
 * @param {*} value - The object to check.
 * @returns {boolean} True if the object is empty, otherwise false.
 */
export function isEmptyObject(value: any): boolean;
