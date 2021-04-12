/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const num = n.toString();
  const arr = [];
  for (let i = 0; i < num.length; i++) {
    arr.push(+num[i]);
  }
  arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
  return +arr.join('');
}

module.exports = deleteDigit;
