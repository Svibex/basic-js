const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof value === 'undefined') {
      this.chain.push('( )');
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position > 0 && position <= this.getLength()) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw Error;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = [...this.chain];
    this.chain = [];
    return result.join('~~');
  }
};

module.exports = chainMaker;
