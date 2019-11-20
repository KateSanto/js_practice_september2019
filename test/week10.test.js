const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/week10");

describe("sumDigits", () => {

    test("This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.", () => {
        const result = sumDigits(123);
        const expected = 6;
        expect(result).toBe(expected);
    })

    test("Works with different longer numbers", () => {
        const result = sumDigits(1235789);
        const expected = 35;
        expect(result).toBe(expected);
    })
})

