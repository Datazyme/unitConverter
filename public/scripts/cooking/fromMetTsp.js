//from Metric Teaspoons to the rest
const metTspToMl = function (value) {
  let ml = value * 5;
  return ml;
};

const metTspToMetCups = function (value) {
  let metCups = value * 0.02;
  return metCups.toFixed(3);
};

const metTspToUsCups = function (value) {
  let usCups = value * 0.021134;
  return usCups.toFixed(3);
};

const metTspToImCups = function (value) {
  let imCups = value * 0.017598;
  return imCups.toFixed(3);
};

const metTspToMetTbsp = function (value) {
  let metTbsp = value * 0.333333;
  return metTbsp.toFixed(3);
};

const metTspToUsTbsp = function (value) {
  let usTbsp = value * 0.33814;
  return usTbsp.toFixed(3);
};

const metTspToImTbsp = function (value) {
  let imTbsp = value * 0.281561;
  return imTbsp.toFixed(3);
};

const metTspToUsTsp = function (value) {
  let usTsp = value * 1.014421;
  return usTsp.toFixed(3);
};

const metTspToImTsp = function (value) {
  let imTsp = value * 0.844682;
  return imTsp.toFixed(3);
};
