"use strict";
/**
 * Checks if a value is null.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is null, otherwise false.
 */
var isNull = function (value) { return value === null; };
/**
 * Checks if a value is undefined.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is undefined, otherwise false.
 */
var isUndefined = function (value) { return value === undefined; };
/**
 * Checks if a value is either null or undefined.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is null or undefined, otherwise false.
 */
var isMissing = function (value) { return isNull(value) || isUndefined(value); };
/**
 * Checks if a value is present (not null or undefined).
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is present, otherwise false.
 */
var isPresent = function (value) { return !isMissing(value); };
/**
 * Checks if a value is a string.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a string, otherwise false.
 */
var isString = function (value) { return isPresent(value) && typeof value === "string"; };
/**
 * Checks if a value is a boolean.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a boolean, otherwise false.
 */
var isBoolean = function (value) { return isPresent(value) && typeof value === "boolean"; };
/**
 * Checks if a value is a function.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a function, otherwise false.
 */
var isFunction = function (value) { return isPresent(value) && typeof value === "function"; };
/**
 * Checks if a value is an array.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an array, otherwise false.
 */
var isArray = function (value) { return isPresent(value) && Array.isArray(value); };
/**
 * Checks if two values are equal.
 * @param {*} value1 - The first value to compare.
 * @param {*} value2 - The second value to compare.
 * @returns {boolean} True if the values are equal, otherwise false.
 */
var isEqual = function (value1, value2) { return value1 === value2; };
/**
 * Checks if a value is an empty string.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an empty string, otherwise false.
 */
var isEmptyString = function (value) { return isString(value) && isEqual(value.length, 0); };
/**
 * Checks if a value is a non-empty string.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a non-empty string, otherwise false.
 */
var isNonEmptyString = function (value) { return isString(value) && value.length > 0; };
/**
 * Checks if a value is an empty array.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an empty array, otherwise false.
 */
var isEmptyArray = function (value) { return isArray(value) && isEqual(value.length, 0); };
/**
 * Checks if a value is a non-empty array.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a non-empty array, otherwise false.
 */
var isNonEmptyArray = function (value) { return isArray(value) && value.length > 0; };
/**
 * Checks if a value is an object.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an object, otherwise false.
 */
var isObject = function (value) { return isPresent(value) && typeof value === "object"; };
/**
 * Checks if an object is empty (has no properties or symbols).
 * @param {*} value - The object to check.
 * @returns {boolean} True if the object is empty, otherwise false.
 */
var isEmptyObject = function (value) {
    return isObject(value) &&
        Object.keys(value).length === 0 &&
        Object.getOwnPropertySymbols(value).length === 0;
};
module.exports = {
    isNull: isNull,
    isUndefined: isUndefined,
    isMissing: isMissing,
    isPresent: isPresent,
    isString: isString,
    isBoolean: isBoolean,
    isFunction: isFunction,
    isArray: isArray,
    isEqual: isEqual,
    isEmptyString: isEmptyString,
    isNonEmptyString: isNonEmptyString,
    isEmptyArray: isEmptyArray,
    isNonEmptyArray: isNonEmptyArray,
    isObject: isObject,
    isEmptyObject: isEmptyObject
};
