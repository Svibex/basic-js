const { NotImplementedError } = require('../extensions/index.js');

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
  throw new NotImplementedError('Not implemented');

  let arr = n.toString().split('')
  for (let i=0;i<10;i++) {
    for (let j=0;j<arr.length;j++) {
      if (Number(arr[j]) === i) {
        arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
        break
      }
    }
  }
  return Number(arr.join(''))
}

module.exports = {
  deleteDigit
};
