const convertToCelsius = function(tempF) {
  let tempC = (tempF - 32) * (5 / 9);
  let roundedTemp = Number(tempC.toFixed(1));
  return roundedTemp;
};

const convertToFahrenheit = function(tempC) {
  let tempF = (tempC * (9 / 5)) + 32;
  let roundedTemp = Number(tempF.toFixed(1));
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
