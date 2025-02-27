/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const result = [];
  let counter = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      counter += 1;
    } else {
      result.push(counter + arr[i]);
      counter = 1;
    }
  }
  return result.join('').replace(/1/g, '');
}
module.exports = encodeLine;
