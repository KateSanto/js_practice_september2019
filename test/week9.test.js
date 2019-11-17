const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/week9");

describe("sumMultiples", () => {

    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 2, 5]);
        const expected = 5;
        expect(result).toBe(expected);
    })

    test("it works fine with decimal numbers", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected);
    })

    test("returns 0 if there are no multiples of 3 or 5", () => {
        const result = sumMultiples([1, 2, 8, 13, 7]);
        const expected = 0;
        expect(result).toBe(expected);
    })
});

describe("isValidDNA", () => {

    test("This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
        const result = isValidDNA("CGTA");
        const expected = true;
        expect(result).toBe(expected);
    })

    test("returns true if characters are valid but lower case", () => {
        const result = isValidDNA("gtac");
        const expected = true;
        expect(result).toBe(expected);
    })

    test("returns false if there are any invalid characters", () => {
        const result = isValidDNA("gtacnotvalidchars");
        const expected = false;
        expect(result).toBe(expected);
    })

    test("returns true if there are spaces", () => {
        const result = isValidDNA("gt ac");
        const expected = true;
        expect(result).toBe(expected);
    })
});

describe("getComplementaryDNA", () => {

    test("This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of 'ACTG' would have a complementary DNA string of 'TGAC'", () => {
        const result = getComplementaryDNA("ACTG");
        const expected = "TGAC";
        expect(result).toBe(expected);
    })

    test("it ignores case ", () => {
        const result = getComplementaryDNA("actg");
        const expected = "TGAC";
        expect(result).toBe(expected);
    })

    test("it ignores spaces ", () => {
        const result = getComplementaryDNA("act g");
        const expected = "TGAC";
        expect(result).toBe(expected);
    })
});

