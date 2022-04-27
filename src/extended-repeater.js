const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|' }) {
  if (typeof str !== 'string') str = String(str);
  if (typeof addition !== 'undefined' && typeof addition !== 'string') addition = String(addition);
  if (addition && additionRepeatTimes) {
    addition = addition.concat(additionSeparator).repeat(additionRepeatTimes)
    addition = addition.slice(0, addition.length - additionSeparator.length);
  }
  if (addition) str = str + addition;
  if (repeatTimes) {
    str = str.concat(separator).repeat(repeatTimes)
    str = str.slice(0, str.length - separator.length);
  }
  return str;
}

module.exports = {
  repeater
};
