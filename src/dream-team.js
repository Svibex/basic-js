module.exports = function repeater(str, { repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|' }) {
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
};
