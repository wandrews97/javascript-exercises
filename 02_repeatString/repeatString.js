const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  } else {
    let compoundString = "";
    for (let i = 0; i < num; i++) {
      compoundString += string;
    }
    return compoundString;
  }
};
repeatString("goodbye", -1);
// Do not edit below this line
module.exports = repeatString;
