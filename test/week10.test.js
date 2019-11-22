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

describe("createRange", () => {

    test("This function creates a range of numbers as an array. It receives a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]", () => {
        const result = createRange(3, 11, 2);
        const expected = [3, 5, 7, 9, 11];
        expect(result).toEqual(expected);
    })

    test("It uses both the start and end numbers. They are inclusive", () => {
        const result = createRange(1, 20, 4);
        const expected = [1, 5, 9, 13, 17];
        expect(result).toEqual(expected);
    })

    test("If step parameter is not provided, assume it's 1", () => {
        const result = createRange(3, 11);
        const expected = [3, 4, 5, 6, 7, 8, 9, 10, 11];
        expect(result).toEqual(expected);
    })
})

describe("getScreentimeAlertList", () => {

    let users = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
            ]
        },
    ]

    test("This function takes an array of user objects and their usage in minutes of various applications. It should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.", () => {

        const result = getScreentimeAlertList(users, "2019-05-04");
        const expected = ["beth_1234"];
        expect(result).toEqual(expected);
    })

    test("It returns an empty array if no users have exceeded the screen time limit of 100 minutes for the specified date", () => {

        const result = getScreentimeAlertList(users, "2019-06-11");
        const expected = [];
        expect(result).toEqual(expected);
    })
})

describe("hexToRGB", () => {
    test("This function takes a colour in hexadecimal format and returns its rgb equivalent", () => {
        const result = hexToRGB("#FF1133");
        const expected = "rgb(255,17,51)";
        expect(result).toBe(expected);
    })

    //  WRITE ANOTHER TEST OR TWO (FUNCTION WORKS NOW WITH JUST ONE TEST)


})