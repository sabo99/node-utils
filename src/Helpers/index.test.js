const { noop, generateRandomNumber, generateRandomString } = require(".");

describe("Helpers", () => {
	describe("#noop", () => {
		it("should return void", () => {
			const result = noop();

			expect(result).toBeUndefined();
		});
	});

	describe("#generateRandomNumber", () => {
		it("should generate a random number of specified length", () => {
			const length = 5;
			const result = generateRandomNumber(length);
			expect(result).toHaveLength(length);
			expect(result).toMatch(/^\d+$/);
		});
	});

	describe("#generateRandomString", () => {
		it("should generate a random string of specified length", () => {
			const length = 8;
			const result = generateRandomString(length);
			expect(result).toHaveLength(length);
			expect(result).toMatch(/^[A-Za-z0-9]+$/);
		});
	});
});
