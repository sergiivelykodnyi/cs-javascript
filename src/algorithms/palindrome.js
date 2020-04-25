function isPalindrome_v1(string) {
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

function isPalindrome_v2(string) {
  const cleaned = string.replace(/\W/g, "").toLowerCase();
  const length = cleaned.length - 1;

  return cleaned
    .split("")
    .every((char, index) => char === cleaned[length - index]);
}

function isPalindrome_v3(string) {
  const cleaned = string.replace(/\W/g, "").toLowerCase();
  const reverse = cleaned.split("").reverse().join("");

  return cleaned === reverse;
}

module.exports = {
  isPalindrome_v1,
  isPalindrome_v2,
  isPalindrome_v3
}
