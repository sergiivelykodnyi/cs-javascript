function stringReverse_v1(string) {
  return string
    .split("")
    .reverse()
    .join("");
}

function stringReverse_v2(string) {
  let result = "";

  for (const character of string) {
    result = character + result;
  }

  return result;
}

function stringReverse_v3(string) {
  return string.split("").reduce((result, character) => character + result);
}

module.exports = {
  stringReverse_v1,
  stringReverse_v2,
  stringReverse_v3 
}
