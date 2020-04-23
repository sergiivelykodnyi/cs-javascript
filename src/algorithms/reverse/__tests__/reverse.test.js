const { reverse_v1, reverse_v2, reverse_v3 } = require("../reverse");

describe("String Reversal", () => {
  test("Should reverse string", () => {
    expect(reverse_v1("Hello World!")).toEqual("!dlroW olleH");
    expect(reverse_v2("Hello World!")).toEqual("!dlroW olleH");
    expect(reverse_v3("Hello World!")).toEqual("!dlroW olleH");
  });
});
