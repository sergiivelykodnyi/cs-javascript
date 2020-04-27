/**
 * Palindrome
 * @param {*} string
 * @returns {string}
 */
function isPalindrome(string) {
  const cleaned = string.replace(/\W/g, "").toLowerCase();
  const reverse = cleaned.split("").reverse().join("");

  return cleaned === reverse;
}

function isPalindrome2(string) {
  const validChars = "abcdefghijklmnopqrstuvwxyz".split("");
  const stringChars = string
    .toLowerCase()
    .split("")
    .reduce(
      (chars, char) =>
        validChars.indexOf(char) > -1 ? chars.concat(char) : chars,
      []
    );

  return stringChars.join("") === stringChars.reverse().join("");
}

function isPalindrome3(string) {
  const cleaned = string.replace(/\W/g, "").toLowerCase();
  const length = cleaned.length - 1;

  return cleaned
    .split("")
    .every((char, index) => char === cleaned[length - index]);
}

module.exports = {
  isPalindrome,
  isPalindrome2,
  isPalindrome3,
}
