const { NotImplementedError } = require('../extensions/index.js');

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
  if (names === []) return []
  let item
  let index
  let count = 1
  let copy = names
  for (let i=0;i<names.length;i++) {
    index = names.indexOf(names[i], i+1)
    if (index !== -1) {
      item = names[i]
      while (index !== -1) {
        copy.splice(index, 1, item + `(${count})`)
        index = names.indexOf(item, index + 1);
        count++
      }
      break
    }
  }
  count = 1
  for (let j=0;j<copy.length;j++) {
    index = copy.indexOf(copy[j], j+1)
    console.log(index);
    if (index !== -1) {
      item = copy[j]
      copy.splice(index, 1, item + `(${count})`)
    }
  }
  return copy
}

module.exports = {
  renameFiles
};
