/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');

  function checkRepeat(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
    }
    return obj;
  }

  const obj1 = checkRepeat(arr1);
  const obj2 = checkRepeat(arr2);
  let sum = 0;

  const keys = Object.keys(obj1);
  for (let i = 0; i < keys.length; i++) {
    const letter = keys[i];
    if (obj2[letter]) {
      if (obj1[letter] <= obj2[letter]) {
        sum += obj1[letter];
      } else {
        sum += obj2[letter];
      }
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;
