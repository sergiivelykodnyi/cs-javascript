const { stringReverse_v1, stringReverse_v2, stringReverse_v3  } = require("../reverse");

describe("String Reversal", () => {
  test("Should reverse string", () => {
    expect(stringReverse_v1("Hello World!")).toEqual("!dlroW olleH");
    expect(stringReverse_v2("Hello World!")).toEqual("!dlroW olleH");
    expect(stringReverse_v3("Hello World!")).toEqual("!dlroW olleH");
  });
});
