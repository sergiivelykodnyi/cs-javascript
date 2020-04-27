const { stringReverse, stringReverse2, stringReverse3, integerReverse } = require("../reverse");

describe("String Reversal", () => {
  test("stringReverse", () => {
    expect(stringReverse("Hello World!")).toEqual("!dlroW olleH");
  });
  test("stringReverse2", () => {
    expect(stringReverse2("Hello World!")).toEqual("!dlroW olleH");
  });
  test("stringReverse3", () => {
    expect(stringReverse3("Hello World!")).toEqual("!dlroW olleH");
  });
});

describe("Integer Reversal", () => {
  test("integerReverse", () => {
    expect(integerReverse(123456)).toEqual(654321);
    expect(integerReverse(-1200)).toEqual(-21);
  });
});
