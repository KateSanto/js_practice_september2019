const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  }  = require("../challenges/week9");

  describe("sumMultiples", () => {

test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
    const result = sumMultiples([1, 2, 5]);
    const expected = 8;
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