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
  let number = n.toString().split('')
  let arrayMax = []
  let numberCopy
  for (let i=0; i<number.length; i++) {
    numberCopy = number.slice(0, number.length)
    numberCopy.splice(i, 1)
    arrayMax.push(Number(numberCopy.join('')))
  }

  return Math.max.apply(0, arrayMax)
}

module.exports = {
  deleteDigit
};
