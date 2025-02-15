/**
 * Checks if a value is null.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is null, otherwise false.
 */
const isNull = (value) => value === null;

/**
 * Checks if a value is undefined.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is undefined, otherwise false.
 */
const isUndifined = (value) => value === undefined;

/**
 * Checks if a value is either null or undefined.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is null or undefined, otherwise false.
 */
const isMissing = (value) => isNull(value) || isUndifined(value);

/**
 * Checks if a value is present (not null or undefined).
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is present, otherwise false.
 */
const isPresent = (value) => !isMissing(value);

/**
 * Checks if a value is a string.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a string, otherwise false.
 */
const isString = (value) => isPresent(value) && typeof value === "string";

/**
 * Checks if a value is a boolean.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a boolean, otherwise false.
 */
const isBoolean = (value) => isPresent(value) && typeof value === "boolean";

/**
 * Checks if a value is a function.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a function, otherwise false.
 */
const isFunction = (value) => isPresent(value) && typeof value === "function";

/**
 * Checks if a value is an array.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an array, otherwise false.
 */
const isArray = (value) => isPresent(value) && Array.isArray(value);

/**
 * Checks if two values are equal.
 * @param {*} value1 - The first value to compare.
 * @param {*} value2 - The second value to compare.
 * @returns {boolean} True if the values are equal, otherwise false.
 */
const isEqual = (value1, value2) => value1 === value2;

/**
 * Checks if a value is an empty string.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an empty string, otherwise false.
 */
const isEmptyString = (value) => isString(value) && isEqual(value.length, 0);

/**
 * Checks if a value is a non-empty string.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a non-empty string, otherwise false.
 */
const isNonEmptyString = (value) => isString(value) && value.length > 0;

/**
 * Checks if a value is an empty array.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an empty array, otherwise false.
 */
const isEmptyArray = (value) => isArray(value) && isEqual(value.length, 0);

/**
 * Checks if a value is a non-empty array.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a non-empty array, otherwise false.
 */
const isNonEmptyArray = (value) => isArray(value) && value.length > 0;

/**
 * Checks if a value is an object.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an object, otherwise false.
 */
const isObject = (value) => isPresent(value) && typeof value === "object";

/**
 * Checks if an object is empty (has no properties or symbols).
 * @param {*} value - The object to check.
 * @returns {boolean} True if the object is empty, otherwise false.
 */
const isEmptyObject = (value) =>
	isObject(value) &&
	Object.keys(value).length === 0 &&
	Object.getOwnPropertySymbols(value).length === 0;

module.exports = {
	isNull,
	isUndifined,
	isMissing,
	isPresent,
	isString,
	isBoolean,
	isFunction,
	isArray,
	isEqual,
	isEmptyString,
	isNonEmptyString,
	isEmptyArray,
	isNonEmptyArray,
	isObject,
	isEmptyObject,
};
