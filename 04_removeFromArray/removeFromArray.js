const removeFromArray = function (inputArray, removeThis) {
  for (let i = 0; i <= inputArray.length; i++) {
    if (removeThis === inputArray[i]) {
      inputArray.splice(i, 1);
    } else continue;
  }
  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
