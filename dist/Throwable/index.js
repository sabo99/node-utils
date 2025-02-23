"use strict";
var Conditionals = require("../Conditionals");
var Helpers = require("../Helpers");
/**
 * Creates a throwable function based on a condition and type.
 * @param {Function} condition - The condition to check.
 * @param {string} type - The type to validate against.
 * @returns {Function} A function that throws an error if the condition is not met.
 */
var createThrowable = function (condition, type) {
    if (condition === void 0) { condition = Helpers.noop; }
    return function (value, errorMessage, Err) {
        if (Err === void 0) { Err = TypeError; }
        if (!Conditionals.isNonEmptyString(type)) {
            throw new TypeError('"type" must be a non-empty string');
        }
        if (condition(value)) {
            return undefined;
        }
        var message = Conditionals.isNonEmptyString(errorMessage)
            ? errorMessage
            : "Validation Error: Expected a value of type \"".concat(type, "\", but received \"").concat(value, "\" of type \"").concat(typeof value, "\".");
        throw new Err(message);
    };
};
/**
 * Throws an error if the value is missing (null or undefined).
 * @type {Function}
 */
var throwIfMissing = createThrowable(Conditionals.isPresent, "Something");
/**
 * Throws an error if the value is not a string.
 * @type {Function}
 */
var throwIfNotString = createThrowable(Conditionals.isString, "String");
/**
 * Throws an error if the value is not an object.
 * @type {Function}
 */
var throwIfNotObject = createThrowable(Conditionals.isObject, "Object");
/**
 * Throws an error if the value is not an array.
 * @type {Function}
 */
var throwIfNotArray = createThrowable(Conditionals.isArray, "Array");
module.exports = {
    createThrowable: createThrowable,
    throwIfMissing: throwIfMissing,
    throwIfNotString: throwIfNotString,
    throwIfNotObject: throwIfNotObject,
    throwIfNotArray: throwIfNotArray
};
