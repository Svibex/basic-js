const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  return domains.map(item=>item.split('.')
      .reverse()).map(toJoin)
      .reduce((a, b) => a.concat(b), [])
      .reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1;
        return acc;
      },{})

  function toJoin (arr) {
    let newArr = [];
    let str = '';
    for(let i = 0; i<arr.length;i++) {
      newArr.push(str+"."+arr[i]);
      str = newArr[i];
    }
    return newArr;
  }
}

module.exports = {
  getDNSStats
};
