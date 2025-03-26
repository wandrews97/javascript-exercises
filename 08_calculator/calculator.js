const add = function (firstValue, secondValue) {
  return firstValue + secondValue;
};

const subtract = function (firstValue, secondValue) {
  return firstValue - secondValue;
};

const sum = function (sumArray) {
  let out = 0;
  for (let i = 0; i < sumArray.length; i++) {
    out = out += sumArray[i];
  }
  return out;
};

const multiply = function (multArray) {
  let sum = 1;
  for (let i = 0; i < multArray.length; i++) {
    sum = sum * multArray[i];
  }
  return sum;
};

const power = function (base, indice) {
  return Math.pow(base, indice);
};

const factorial = function (input) {
  if (input === 0) {
    return 1;
  }
  let sum = input;
  for (let i = input - 1; i > 0; i--) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
