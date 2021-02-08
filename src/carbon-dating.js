const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; // a0
const HALF_LIFE_PERIOD = 5730; // t12

/* t = (ln*(n/n0))/k = (ln*(a/a0))/k, where k = ln/t12. t =   */

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity != String ||
    typeof sampleActivity == null ||
    typeof sampleActivity == undefined
  ) {
    return false;
  }
  let t = (parseInt(sampleActivity) * HALF_LIFE_PERIOD) / MODERN_ACTIVITY;

  return Math.ceil(t);
};
