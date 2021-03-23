  
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof members !== Array) {
    return false
  }
  members = members.sort()
  let arr = []
  for (let name of members) {
    if (typeof name === 'string') {
      name = name.trim()
      arr.push(name[0].toUpperCase())
    }
  }
  return arr.sort().join('')
};
