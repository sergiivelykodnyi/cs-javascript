const { isPalindrome, isPalindrome2, isPalindrome3 } = require("../palindrome");

describe("Palindrome", () => {
  test("Should return true", () => {
    expect(isPalindrome("Cigar? Toss it in a can. It is so tragic")).toEqual(true);
  });
  test("Should return true", () => {
    expect(isPalindrome2("Cigar? Toss it in a can. It is so tragic")).toEqual(true);
  });
  test("Should return true", () => {
    expect(isPalindrome3("Cigar? Toss it in a can. It is so tragic")).toEqual(true);
  });
  test("Should return false", () => {
    expect(isPalindrome("sit ad est love")).toEqual(false);
  });
  test("Should return false", () => {
    expect(isPalindrome2("sit ad est love")).toEqual(false);
  });
  test("Should return false", () => {
    expect(isPalindrome3("sit ad est love")).toEqual(false);
  });
});
