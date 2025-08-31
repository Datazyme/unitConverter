//from Imperial Teaspoons to the rest
const imTspToMl = function (value) {
  let ml = value * 5.919388;
  return ml.toFixed(3);
};

const imTspToMetCups = function (value) {
  let metCups = value * 0.023678;
  return metCups.toFixed(3);
};

const imTspToUsCups = function (value) {
  let usCups = value * 0.02502;
  return usCups.toFixed(3);
};

const imTspToImCups = function (value) {
  let imCups = value * 0.020833;
  return imCups.toFixed(3);
};

const imTspToMetTbsp = function (value) {
  let metTbsp = value * 0.394626;
  return metTbsp.toFixed(3);
};

const imTspToUsTbsp = function (value) {
  let usTbsp = value * 0.400317;
  return usTbsp.toFixed(3);
};

const imTspToImTbsp = function (value) {
  let imTbsp = value * 0.333333;
  return imTbsp.toFixed(3);
};

const imTspToMetTsp = function (value) {
  let metTsp = value * 1.183878;
  return metTsp.toFixed(3);
};

const imTspToUsTsp = function (value) {
  let usTsp = value * 1.20095;
  return usTsp.toFixed(3);
};
