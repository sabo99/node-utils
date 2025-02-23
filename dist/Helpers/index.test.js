"use strict";
var _a = require("."), noop = _a.noop, generateRandomNumber = _a.generateRandomNumber, generateRandomString = _a.generateRandomString;
describe("Helpers", function () {
    describe("#noop", function () {
        it("should return void", function () {
            var result = noop();
            expect(result).toBeUndefined();
        });
    });
    describe("#generateRandomNumber", function () {
        it("should generate a random number of specified length", function () {
            var length = 5;
            var result = generateRandomNumber(length);
            expect(result).toHaveLength(length);
            expect(result).toMatch(/^\d+$/);
        });
    });
    describe("#generateRandomString", function () {
        it("should generate a random string of specified length", function () {
            var length = 8;
            var result = generateRandomString(length);
            expect(result).toHaveLength(length);
            expect(result).toMatch(/^[A-Za-z0-9]+$/);
        });
    });
});
