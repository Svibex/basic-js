const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let res = Math.pow(2, disksNumber) - 1;
  return {turns: res, seconds:  Math.floor(res / (turnsSpeed / 3600))}
};
