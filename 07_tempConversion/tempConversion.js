const convertToCelsius = function (fInput) {
  return Math.round(((fInput - 32) / 1.8) * 10) / 10;
};

const convertToFahrenheit = function (cInput) {
  return Math.round((cInput * 1.8 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
