module.exports = class DepthCalculator {
    calculateDepth = (arr) => {
        return Array.isArray(arr)
            ? !arr.length
                ? 1
                : 1 + Math.max(...arr.map(this.calculateDepth))
            : 0;
    }
};
