/**
 * String Reversal
 * @param {string} string
 * @returns {string}
 */
function stringReverse(string) {
  return string.split("").reverse().join("");
}

function stringReverse2(string) {
  let result = "";

  for (const character of string) {
    result = character + result;
  }

  return result;
}

function stringReverse3(string) {
  return string.split("").reduce((result, character) => character + result);
}

/**
 * Integer Reversal
 * @param {number} number
 * @returns {number}
 */
function integerReverse(number) {
  const reverse = stringReverse(number.toString());

  return parseInt(reverse) * Math.sign(number);
}

function arrayReverse(array) {
  const result = [];

  let i = array.length - 1;
  for (i; i >= 0; i--) {
    result.push(array[i]);
  }

  return result;
}

module.exports = {
  stringReverse,
  stringReverse2,
  stringReverse3,
  integerReverse,
  arrayReverse,
};
