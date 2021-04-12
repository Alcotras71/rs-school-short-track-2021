/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const obj = {};
  const arr = [];
  for (let i = 0; i < names.length; i++) {
    const item = names[i];
    obj[item] = obj[item] ? (obj[item] += 1) : 1;
    if (arr.includes(item)) {
      const newItem = `${item}(${obj[item] - 1})`;
      arr.push(newItem);
      obj[newItem] = 1;
    } else {
      arr.push(item);
    }
  }
  return arr;
}

module.exports = renameFiles;
