const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let teamName = "";
  let membersProcessed = [];

  if (!Array.isArray(members)) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      membersProcessed[i] = members[i].replace(/\s+/g, "");
      membersProcessed[i] = membersProcessed[i].toUpperCase();
    }
  }

  membersProcessed = membersProcessed.sort();

  for (let i = 0; i < membersProcessed.length; i++) {
    if (typeof membersProcessed[i] == "string") {
      teamName = teamName + membersProcessed[i][0];
    }
  }

  return teamName;
};
