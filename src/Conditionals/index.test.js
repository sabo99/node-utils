const {
	isNull,
	isUndefined,
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
	isEmptyObject
} = require(".");

describe("Conditionals", () => {
	describe("#isNull", () => {
		it("should return true if the value is null", () => {
			const result = isNull(null);

			expect(result).toBeTruthy();
		});
	});

	describe("#isUndefined", () => {
		it("should return true if the value is undefined", () => {
			const result = isUndefined(undefined);
			expect(result).toBeTruthy();
		});
	});

	describe("#isMissing", () => {
		it("should return true if the value is null or undefined", () => {
			expect(isMissing(null)).toBeTruthy();
			expect(isMissing(undefined)).toBeTruthy();
			expect(isMissing("value")).toBeFalsy();
		});
	});

	describe("#isPresent", () => {
		it("should return true if the value is present", () => {
			expect(isPresent("value")).toBeTruthy();
			expect(isPresent(null)).toBeFalsy();
			expect(isPresent(undefined)).toBeFalsy();
		});
	});

	describe("#isString", () => {
		it("should return true if the value is a string", () => {
			expect(isString("value")).toBeTruthy();
			expect(isString(123)).toBeFalsy();
		});
	});

	describe("#isBoolean", () => {
		it("should return true if the value is a boolean", () => {
			expect(isBoolean(true)).toBeTruthy();
			expect(isBoolean(false)).toBeTruthy();
			expect(isBoolean("true")).toBeFalsy();
		});
	});

	describe("#isFunction", () => {
		it("should return true if the value is a function", () => {
			expect(isFunction(() => {})).toBeTruthy();
			expect(isFunction("function")).toBeFalsy();
		});
	});

	describe("#isArray", () => {
		it("should return true if the value is an array", () => {
			expect(isArray([])).toBeTruthy();
			expect(isArray("array")).toBeFalsy();
		});
	});

	describe("#isEqual", () => {
		it("should return true if the values are equal", () => {
			expect(isEqual(1, 1)).toBeTruthy();
			expect(isEqual(1, 2)).toBeFalsy();
		});
	});

	describe("#isEmptyString", () => {
		it("should return true if the value is an empty string", () => {
			expect(isEmptyString("")).toBeTruthy();
			expect(isEmptyString("value")).toBeFalsy();
		});
	});

	describe("#isNonEmptyString", () => {
		it("should return true if the value is a non-empty string", () => {
			expect(isNonEmptyString("value")).toBeTruthy();
			expect(isNonEmptyString("")).toBeFalsy();
		});
	});

	describe("#isEmptyArray", () => {
		it("should return true if the value is an empty array", () => {
			expect(isEmptyArray([])).toBeTruthy();
			expect(isEmptyArray([1, 2, 3])).toBeFalsy();
		});
	});

	describe("#isNonEmptyArray", () => {
		it("should return true if the value is a non-empty array", () => {
			expect(isNonEmptyArray([1, 2, 3])).toBeTruthy();
			expect(isNonEmptyArray([])).toBeFalsy();
		});
	});

	describe("#isObject", () => {
		it("should return true if the value is an object", () => {
			expect(isObject({})).toBeTruthy();
			expect(isObject(null)).toBeFalsy();
		});
	});

	describe("#isEmptyObject", () => {
		it("should return true if the object is empty", () => {
			expect(isEmptyObject({})).toBeTruthy();
			expect(isEmptyObject({ key: "value" })).toBeFalsy();
		});
	});
});
