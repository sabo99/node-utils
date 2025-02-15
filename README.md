# node-utils

Utilities for node modules

## Installation

```sh
npm install node-utils
```

## Usage

### Conditionals

```javascript
const Conditionals = require('node-utils/src/Conditionals');

// Check if a value is null
console.log(Conditionals.isNull(null)); // true

// Check if a value is a non-empty string
console.log(Conditionals.isNonEmptyString('Hello')); // true
```

### Helpers

```javascript
const Helpers = require('node-utils/src/Helpers');

// Generate a random number of length 5
console.log(Helpers.generateRandomNumber(5)); // e.g., '12345'

// Generate a random string of length 8
console.log(Helpers.generateRandomString(8)); // e.g., 'aBcDeFgH'
```

### Throwable

```javascript
const Throwable = require('node-utils/src/Throwable');

// Throws an error if the value is missing (null or undefined)
Throwable.throwIfMissing(null, 'Value is missing'); // Throws an error

// Throws an error if the value is not a string
Throwable.throwIfNotString(123, 'Value is not a string'); // Throws an error
```

## API

### Conditionals

- `isNull(value)`: Checks if a value is null.
- `isUndifined(value)`: Checks if a value is undefined.
- `isMissing(value)`: Checks if a value is either null or undefined.
- `isPresent(value)`: Checks if a value is present (not null or undefined).
- `isString(value)`: Checks if a value is a string.
- `isBoolean(value)`: Checks if a value is a boolean.
- `isFunction(value)`: Checks if a value is a function.
- `isArray(value)`: Checks if a value is an array.
- `isEqual(value1, value2)`: Checks if two values are equal.
- `isEmptyString(value)`: Checks if a value is an empty string.
- `isNonEmptyString(value)`: Checks if a value is a non-empty string.
- `isEmptyArray(value)`: Checks if a value is an empty array.
- `isNonEmptyArray(value)`: Checks if a value is a non-empty array.
- `isObject(value)`: Checks if a value is an object.
- `isEmptyObject(value)`: Checks if an object is empty (has no properties or symbols).

### Helpers

- `noop()`: A no-operation function that does nothing.
- `generateRandomNumber(length)`: Generates a random number of a specified length.
- `generateRandomString(length)`: Generates a random string of a specified length.

### Throwable

- `createThrowable(condition, type)`: Creates a throwable function based on a condition and type.
- `throwIfMissing(value, errorMessage, Err)`: Throws an error if the value is missing (null or undefined).
- `throwIfNotString(value, errorMessage, Err)`: Throws an error if the value is not a string.
- `throwIfNotObject(value, errorMessage, Err)`: Throws an error if the value is not an object.
- `throwIfNotArray(value, errorMessage, Err)`: Throws an error if the value is not an array.
