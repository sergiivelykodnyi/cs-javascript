const { isPalindrome_v1, isPalindrome_v2, isPalindrome_v3 } = require("../palindrome");

describe("Palindrome", () => {
  test("Should return true", () => {
    expect(isPalindrome_v1("Cigar? Toss it in a can. It is so tragic")).toEqual(true);
  });
  test("Should return true", () => {
    expect(isPalindrome_v2("Cigar? Toss it in a can. It is so tragic")).toEqual(true);
  });
  test("Should return true", () => {
    expect(isPalindrome_v3("Cigar? Toss it in a can. It is so tragic")).toEqual(true);
  });
  test("Should return false", () => {
    expect(isPalindrome_v1("sit ad est love")).toEqual(false);
  });
  test("Should return false", () => {
    expect(isPalindrome_v2("sit ad est love")).toEqual(false);
  });
  test("Should return false", () => {
    expect(isPalindrome_v3("sit ad est love")).toEqual(false);
  });
});
