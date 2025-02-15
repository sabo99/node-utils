/**
 * A no-operation function that does nothing.
 */
const noop = () => {};

/**
 * Generates a random number of a specified length.
 *
 * @param {number} length - The length of the random number to generate.
 * @returns {string} A string representing the random number of the specified length.
 */
const generateRandomNumber = (length) => {
  return Math.random().toString().slice(2, 2 + length).padEnd(length, "0");
};

/**
 * Generates a random string of a specified length.
 *
 * @param {number} length - The length of the random string to generate.
 * @returns {string} A string representing the random string of the specified length.
 */
const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

module.exports = {
  noop,
  generateRandomNumber,
  generateRandomString,
};

module.exports = {
	noop,
};
