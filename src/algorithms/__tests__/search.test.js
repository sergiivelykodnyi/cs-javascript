const { binarySearch } = require("../search");

describe("Search", () => {
  test("Binary Search", () => {
    const numbers = [];

    for (let i = 0; i < 1234; i++) numbers.push(i);

    expect(binarySearch(270, numbers)).toBe(270);
    expect(binarySearch(-5, numbers)).toBeUndefined();
    expect(binarySearch(12345, numbers)).toBeUndefined();
  });
});
