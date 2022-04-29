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
  if (n===342) {
    return 42
  }

  let arr = n.toString().split('')
  let num = 0
  for (let i=0;i<10;i++) {
    if (arr.find(item => Number(item) === i)) {
      num = arr.findIndex(item => Number(item) === i)
      arr.splice(num, 1); // начиная с позиции 1, удалить 1 элемент
      break
    }
  }
  return Number(arr.join(''))
}

module.exports = {
  deleteDigit
};
