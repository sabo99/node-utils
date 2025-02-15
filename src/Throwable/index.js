const Conditionals = require("../Conditionals");
const Helpers = require("../Helpers");

/**
 * Creates a throwable function based on a condition and type.
 * @param {Function} condition - The condition to check.
 * @param {string} type - The type to validate against.
 * @returns {Function} A function that throws an error if the condition is not met.
 */
const createThrowable =
	(condition = Helpers.noop, type) =>
	(value, errorMessage, Err = TypeError) => {
		if (!Conditionals.isNonEmptyString(type)) {
			throw new TypeError('"type" must be a non-empty string');
		}

		if (condition(value)) {
			return;
		}

		const message = Conditionals.isNonEmptyString(errorMessage)
			? errorMessage
			: `Validation failed - expected "${type}", but received "${value}" of type "${typeof value}"`;

		throw new Err(message);
	};

/**
 * Throws an error if the value is missing (null or undefined).
 * @type {Function}
 */
const throwIfMissing = createThrowable(Conditionals.isPresent, "Something");

/**
 * Throws an error if the value is not a string.
 * @type {Function}
 */
const throwIfNotString = createThrowable(Conditionals.isPresent, "String");

/**
 * Throws an error if the value is not an object.
 * @type {Function}
 */
const throwIfNotObject = createThrowable(Conditionals.isObject, "Object");

/**
 * Throws an error if the value is not an array.
 * @type {Function}
 */
const throwIfNotArray = createThrowable(Conditionals.isObject, "Array");

module.exports = {
	createThrowable,
	throwIfMissing,
	throwIfNotString,
	throwIfNotObject,
	throwIfNotArray,
};
