const { stringReverse, stringReverse2, stringReverse3, integerReverse  } = require("../reverse");

describe("String Reversal", () => {
  test("Should reverse string", () => {
    expect(stringReverse("Hello World!")).toEqual("!dlroW olleH");
    expect(stringReverse2("Hello World!")).toEqual("!dlroW olleH");
    expect(stringReverse3("Hello World!")).toEqual("!dlroW olleH");
  });
  test("Should reverse integer", () => {
    expect(integerReverse(123456)).toEqual(654321);
    expect(integerReverse(-1200)).toEqual(-21);
  });
});
