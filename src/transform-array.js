  
module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error;
    if (!arr.length) return [];
    const obj = arr.reduce((acc, el, i) => {
        if (el === '--double-next') {
            if (i+1 < arr.length) {
                acc[i + 1] ? acc[i + 1] = acc[i + 1] + 1 : acc[i + 1] = 1;
            }
            acc[i] = -1;
            return acc;
        }
        if (el === '--double-prev') {
            if (i-1 > 0) {
                acc[i-1] ? acc[i-1] = acc[i-1] + 1 : acc[i-1] = 2;
            }
            acc[i] = -1;
            return acc;
        }
        if (el === '--discard-next') {
            if (i+1 < arr.length) {
                acc[i + 1] ? acc[i + 1] = acc[i + 1] - 1 : acc[i + 1] = -1;
            }
            acc[i] = -1;
            return acc;
        }
        if (el === '--discard-prev') {
            if (i-1 > 0) {
                acc[i - 1] ? acc[i - 1] = acc[i - 1] - 1 : acc[i - 1] = -1;
            }
            acc[i] = -1;
            return acc;
        }
        acc[i] ? acc[i] = acc[i] + 1 : acc[i] = 1;
        return acc;
    }, {});
    const result = [];
    for (let key in obj) {
        if (obj[key] === 1) {
            result.push(arr[key]);
        }
        if (obj[key] === 2) {
            result.push(arr[key]);
            result.push(arr[key]);
        }
    }
    return result;
};
