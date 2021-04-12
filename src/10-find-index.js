/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let startPoint = 0;
  let endPoint = array.length - 1;

  while (startPoint <= endPoint) {
    const pivot = Math.floor((startPoint + endPoint) / 2);
    if (array[pivot] === value) {
      return pivot;
    }
    if (array[pivot] > value) {
      endPoint = pivot - 1;
    } else {
      startPoint = pivot + 1;
    }
  }
  return -1;
}
module.exports = findIndex;
