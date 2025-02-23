"use strict";
/**
 * A no-operation function that does nothing.
 */
var noop = function () { };
/**
 * Generates a random number of a specified length.
 *
 * @param {number} length - The length of the random number to generate.
 * @returns {string} A string representing the random number of the specified length.
 */
var generateRandomNumber = function (length) {
    return Math.random().toString().slice(2, 2 + length).padEnd(length, "0");
};
/**
 * Generates a random string of a specified length.
 *
 * @param {number} length - The length of the random string to generate.
 * @returns {string} A string representing the random string of the specified length.
 */
var generateRandomString = function (length) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
module.exports = {
    noop: noop,
    generateRandomNumber: generateRandomNumber,
    generateRandomString: generateRandomString
};
