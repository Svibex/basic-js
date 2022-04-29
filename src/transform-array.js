const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw Error('\'arr\' parameter must be an instance of the Array!');
  if (!arr.length) return [];
  const obj = arr.reduce((acc, el, i) => {
    if (el === '--double-next') {
      if (i+1 < arr.length) {
        acc[i + 1] = 2;
      }
      acc[i] = -1;
      return acc;
    }
    if (el === '--double-prev') {
      if (i-1 > 0) {
        acc[i-1] === -1 ? acc[i-1] = -1 : acc[i-1] = acc[i-1] + 1;
      }
      acc[i] = -1;
      return acc;
    }
    if (el === '--discard-next') {
      if (i+1 < arr.length) {
        acc[i + 1] = -1;
      }
      acc[i] = -1;
      return acc;
    }
    if (el === '--discard-prev') {
      if (i-1 > 0) {
        acc[i - 1] === -1 ? acc[i - 1] = -1 : acc[i - 1] = acc[i - 1] - 1;
      }
      acc[i] = -1;
      return acc;
    }
    acc[i] ? acc[i] = acc[i] : acc[i] = 1;
    return acc;
  }, {});
  const result = [];
  for (let key in obj) {
    while(obj[key] > 0) {
      result.push(arr[key]);
      obj[key]--;
    }
  }
  return result;
}

module.exports = {
  transform
};
