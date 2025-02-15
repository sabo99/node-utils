const {
	createThrowable,
	throwIfMissing,
	throwIfNotString,
	throwIfNotObject,
	throwIfNotArray
} = require(".");
const Helpers = require("../Helpers");

describe("Throwable", () => {
	describe("#createThrowable", () => {
		it("should typeof function", () => {
			const result = createThrowable();

			expect(typeof result).toBe("function");
		});

		it("should throw a TypeError when 'type' is not a non-empty string", () => {
			const invalidTypeValues = [null, undefined, 123, "", {}, []];

			invalidTypeValues.forEach((invalidType) => {
				expect(() => createThrowable(Helpers.noop, invalidType)()).toThrow(
					new TypeError('"type" must be a non-empty string')
				);
			});
		});

    it("should throw an error with default message when error message is provide as empty string", () => {
			expect(() => throwIfMissing(null, "")).toThrow(
				new TypeError(
					'Validation failed - expected "Something", but received "null" of type "object"'
				)
			);
		});

    it("should throw an error with custom message when error message is provide", () => {
      const errorMessage = 'Value is requried';
			expect(() => throwIfMissing(null, errorMessage)).toThrow(
				new TypeError(errorMessage)
			);
		});
	});

	describe("#throwIfMissing", () => {
		it("should throw an error if the value is missing", () => {
			expect(() => throwIfMissing(null, 'value is required')).toThrow(TypeError('value is required'));
			expect(() => throwIfMissing(undefined)).toThrow(TypeError);
		});

		it("should not throw an error if the value is present", () => {
			expect(() => throwIfMissing("value")).not.toThrow();
		});
	});

	describe("#throwIfNotString", () => {
		it("should throw an error if the value is not a string", () => {
			expect(() => throwIfNotString(123.0)).toThrow(TypeError);
			expect(() => throwIfNotString({})).toThrow(TypeError);
		});

		it("should not throw an error if the value is a string", () => {
			expect(() => throwIfNotString("value")).not.toThrow();
		});
	});

	describe("#throwIfNotObject", () => {
		it("should throw an error if the value is not an object", () => {
			expect(() => throwIfNotObject(123)).toThrow(TypeError);
			expect(() => throwIfNotObject("string")).toThrow(TypeError);
		});

		it("should not throw an error if the value is an object", () => {
			expect(() => throwIfNotObject({})).not.toThrow();
		});
	});

	describe("#throwIfNotArray", () => {
		it("should throw an error if the value is not an array", () => {
			expect(() => throwIfNotArray(123)).toThrow(TypeError);
			expect(() => throwIfNotArray("string")).toThrow(TypeError);
			expect(() => throwIfNotArray({})).toThrow(TypeError);
		});

		it("should not throw an error if the value is an array", () => {
			expect(() => throwIfNotArray([])).not.toThrow();
		});
	});
});
