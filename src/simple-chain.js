const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    throw new NotImplementedError('Not implemented');
    return this.chain.length;
  },
  addLink(/* value */) {
    throw new NotImplementedError('Not implemented');
    if (typeof value === 'undefined') {
      this.chain.push('( )');
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(/* position */) {
    throw new NotImplementedError('Not implemented');
    if (Number.isInteger(position) && position > 0 && position <= this.getLength()) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw Error;
    }
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    this.chain.reverse();
    return this;
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    const result = [...this.chain];
    this.chain = [];
    return result.join('~~');
  }
};

module.exports = {
  chainMaker
};
