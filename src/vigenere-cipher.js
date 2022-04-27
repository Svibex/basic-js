const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(message, key) {
    throw new NotImplementedError('Not implemented');

    if (!message || !key) throw Error;
    if (typeof key === 'string') key = this.filterKey(key);
    let output = '';
    for (let i = 0, j = 0; i < message.length; i++) {
      const c = message.charCodeAt(i);
      if (this.isUppercase(c)) {
        output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
        j++;
      } else if (this.isLowercase(c)) {
        output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
        j++;
      } else {
        output += message.charAt(i);
      }
    }
    output = output.toUpperCase();
    return this.direct ? output : this.reverseStr(output);
  }
  decrypt() {
    throw new NotImplementedError('Not implemented');

    if (!encryptedMessage || !key) throw Error;
    key = this.filterKey(key);
    for (let i = 0; i < key.length; i++) {
      key[i] = (26 - key[i]) % 26;
    }
    return this.encrypt(encryptedMessage, key);
  };

  reverseStr = (str) => {
    return str.split('').reverse().join('')
  };

  filterKey= (key) => {
    const result = [];
    for (let i = 0; i < key.length; i++) {
      const c = key.charCodeAt(i);
      if (this.isLetter(c))
        result.push((c - 65) % 32);
    }
    return result;
  };

  isLetter = (c) => {
    return this.isUppercase(c) || this.isLowercase(c);
  };

  isUppercase = (c) => {
    return 65 <= c && c <= 90;
  };

  isLowercase = (c) => {
    return 97 <= c && c <= 122;
  }
}

module.exports = {
  VigenereCipheringMachine
};
