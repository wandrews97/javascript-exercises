// split string into array -> for loop counting down from array.length to 0
const reverseString = function (inputString) {
  const input = inputString;
  const inputArray = input.split("");
  let outputString = "";
  for (let i = inputArray.length - 1; i >= 0; i--) {
    outputString += inputArray[i];
  }
  return outputString;
};

// Do not edit below this line
module.exports = reverseString;
