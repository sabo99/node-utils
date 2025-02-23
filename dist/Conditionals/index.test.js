"use strict";
var _a = require("."), isNull = _a.isNull, isUndefined = _a.isUndefined, isMissing = _a.isMissing, isPresent = _a.isPresent, isString = _a.isString, isBoolean = _a.isBoolean, isFunction = _a.isFunction, isArray = _a.isArray, isEqual = _a.isEqual, isEmptyString = _a.isEmptyString, isNonEmptyString = _a.isNonEmptyString, isEmptyArray = _a.isEmptyArray, isNonEmptyArray = _a.isNonEmptyArray, isObject = _a.isObject, isEmptyObject = _a.isEmptyObject;
describe("Conditionals", function () {
    describe("#isNull", function () {
        it("should return true if the value is null", function () {
            var result = isNull(null);
            expect(result).toBeTruthy();
        });
    });
    describe("#isUndefined", function () {
        it("should return true if the value is undefined", function () {
            var result = isUndefined(undefined);
            expect(result).toBeTruthy();
        });
    });
    describe("#isMissing", function () {
        it("should return true if the value is null or undefined", function () {
            expect(isMissing(null)).toBeTruthy();
            expect(isMissing(undefined)).toBeTruthy();
            expect(isMissing("value")).toBeFalsy();
        });
    });
    describe("#isPresent", function () {
        it("should return true if the value is present", function () {
            expect(isPresent("value")).toBeTruthy();
            expect(isPresent(null)).toBeFalsy();
            expect(isPresent(undefined)).toBeFalsy();
        });
    });
    describe("#isString", function () {
        it("should return true if the value is a string", function () {
            expect(isString("value")).toBeTruthy();
            expect(isString(123)).toBeFalsy();
        });
    });
    describe("#isBoolean", function () {
        it("should return true if the value is a boolean", function () {
            expect(isBoolean(true)).toBeTruthy();
            expect(isBoolean(false)).toBeTruthy();
            expect(isBoolean("true")).toBeFalsy();
        });
    });
    describe("#isFunction", function () {
        it("should return true if the value is a function", function () {
            expect(isFunction(function () { })).toBeTruthy();
            expect(isFunction("function")).toBeFalsy();
        });
    });
    describe("#isArray", function () {
        it("should return true if the value is an array", function () {
            expect(isArray([])).toBeTruthy();
            expect(isArray("array")).toBeFalsy();
        });
    });
    describe("#isEqual", function () {
        it("should return true if the values are equal", function () {
            expect(isEqual(1, 1)).toBeTruthy();
            expect(isEqual(1, 2)).toBeFalsy();
        });
    });
    describe("#isEmptyString", function () {
        it("should return true if the value is an empty string", function () {
            expect(isEmptyString("")).toBeTruthy();
            expect(isEmptyString("value")).toBeFalsy();
        });
    });
    describe("#isNonEmptyString", function () {
        it("should return true if the value is a non-empty string", function () {
            expect(isNonEmptyString("value")).toBeTruthy();
            expect(isNonEmptyString("")).toBeFalsy();
        });
    });
    describe("#isEmptyArray", function () {
        it("should return true if the value is an empty array", function () {
            expect(isEmptyArray([])).toBeTruthy();
            expect(isEmptyArray([1, 2, 3])).toBeFalsy();
        });
    });
    describe("#isNonEmptyArray", function () {
        it("should return true if the value is a non-empty array", function () {
            expect(isNonEmptyArray([1, 2, 3])).toBeTruthy();
            expect(isNonEmptyArray([])).toBeFalsy();
        });
    });
    describe("#isObject", function () {
        it("should return true if the value is an object", function () {
            expect(isObject({})).toBeTruthy();
            expect(isObject(null)).toBeFalsy();
        });
    });
    describe("#isEmptyObject", function () {
        it("should return true if the object is empty", function () {
            expect(isEmptyObject({})).toBeTruthy();
            expect(isEmptyObject({ key: "value" })).toBeFalsy();
        });
    });
});
