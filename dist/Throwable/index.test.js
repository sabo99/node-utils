"use strict";
var _a = require("."), createThrowable = _a.createThrowable, throwIfMissing = _a.throwIfMissing, throwIfNotString = _a.throwIfNotString, throwIfNotObject = _a.throwIfNotObject, throwIfNotArray = _a.throwIfNotArray;
var Helpers = require("../Helpers");
describe("Throwable", function () {
    describe("#createThrowable", function () {
        it("should typeof function", function () {
            var result = createThrowable();
            expect(typeof result).toBe("function");
        });
        it("should throw a TypeError when 'type' is not a non-empty string", function () {
            var invalidTypeValues = [null, undefined, 123, "", {}, []];
            invalidTypeValues.forEach(function (invalidType) {
                expect(function () { return createThrowable(Helpers.noop, invalidType)(); }).toThrow(new TypeError('"type" must be a non-empty string'));
            });
        });
        it("should throw an error with default message when error message is provide as empty string", function () {
            expect(function () { return throwIfMissing(null, ""); }).toThrow(new TypeError('Validation Error: Expected a value of type "Something", but received "null" of type "object".'));
        });
        it("should throw an error with custom message when error message is provide", function () {
            var errorMessage = 'Value is requried';
            expect(function () { return throwIfMissing(null, errorMessage); }).toThrow(new TypeError(errorMessage));
        });
    });
    describe("#throwIfMissing", function () {
        it("should throw an error if the value is missing", function () {
            expect(function () { return throwIfMissing(null, 'value is required'); }).toThrow(TypeError('value is required'));
            expect(function () { return throwIfMissing(undefined); }).toThrow(TypeError);
        });
        it("should not throw an error if the value is present", function () {
            expect(function () { return throwIfMissing("value"); }).not.toThrow();
        });
    });
    describe("#throwIfNotString", function () {
        it("should throw an error if the value is not a string", function () {
            expect(function () { return throwIfNotString(123.0); }).toThrow(TypeError);
            expect(function () { return throwIfNotString({}); }).toThrow(TypeError);
        });
        it("should not throw an error if the value is a string", function () {
            expect(function () { return throwIfNotString("value"); }).not.toThrow();
        });
    });
    describe("#throwIfNotObject", function () {
        it("should throw an error if the value is not an object", function () {
            expect(function () { return throwIfNotObject(123); }).toThrow(TypeError);
            expect(function () { return throwIfNotObject("string"); }).toThrow(TypeError);
        });
        it("should not throw an error if the value is an object", function () {
            expect(function () { return throwIfNotObject({}); }).not.toThrow();
        });
    });
    describe("#throwIfNotArray", function () {
        it("should throw an error if the value is not an array", function () {
            expect(function () { return throwIfNotArray(123); }).toThrow(TypeError);
            expect(function () { return throwIfNotArray("string"); }).toThrow(TypeError);
            expect(function () { return throwIfNotArray({}); }).toThrow(TypeError);
        });
        it("should not throw an error if the value is an array", function () {
            expect(function () { return throwIfNotArray([]); }).not.toThrow();
        });
    });
});
