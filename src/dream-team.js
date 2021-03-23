const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) {
    return false
  }
  members = members.sort()
  let arr=[]
  for (let team of members) {
    if (typeof team === 'string') {
      team = team.trim()
      arr.push(team[0].toUpperCase())
    }
  }
  return arr.sort().join('')
};
