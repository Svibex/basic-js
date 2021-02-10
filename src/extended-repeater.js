const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError("Not implemented");
  let {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 0,
    additionSeparator = "",
  } = options;

  str += "";
  addition += "";

  if (typeof additionSeparator != "string") {
    additionSeparator = typeof additionSeparator;
  }

  if (typeof separator != "string") {
    separator = typeof separator;
  }

  let addBlock = "";
  let addBlockArr = [addition];

  for (let i = 1; i < additionRepeatTimes; i++) {
    addBlockArr.push(addition);
  }

  addBlock = addBlockArr.join(additionSeparator);

  let result = "";
  let resultArr = [];

  for (let i = 0; i < repeatTimes; i++) {
    resultArr.push(str + addBlock);
  }

  result = resultArr.join(separator);

  return result;
};
