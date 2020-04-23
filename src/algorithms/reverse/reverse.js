function reverse_v1(string) {
  return string
    .split("")
    .reverse()
    .join("");
}

function reverse_v2(string) {
  let result = "";

  for (const character of string) {
    result = character + result;
  }

  return result;
}

function reverse_v3(string) {
  return string.split("").reduce((result, character) => character + result);
}

module.exports = {
  reverse_v1,
  reverse_v2,
  reverse_v3
}
