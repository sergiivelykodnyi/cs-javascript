/**
 * Binary Search
 * @param {number} value
 * @param {number[]} array
 */
function binarySearch(value, array) {
  let lowIndex = 0;
  let highIndex = array.length - 1;
  let midIndex;
  let cmp; // a value for compare;

  while (lowIndex <= highIndex) {
    midIndex = Math.floor((lowIndex + highIndex) / 2);
    cmp = array[midIndex];

    if (value < cmp) {
      highIndex = midIndex - 1;
    } else if (value > cmp) {
      lowIndex = midIndex + 1;
    } else {
      return cmp;
    }
  }

  return;
}

module.exports = {
  binarySearch,
};
