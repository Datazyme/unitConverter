//from Imperial Cups to the rest
const imCupToMl = function (value) {
  let ml = value * 284.130623;
  return ml.toFixed(3);
};

const imCupToMetCups = function (value) {
  let metCups = value * 1.136522;
  return metCups.toFixed(3);
};

const imCupToUsCups = function (value) {
  let usCups = value * 1.20095;
  return usCups.toFixed(3);
};

const imCupToMetTbsp = function (value) {
  let imTbsp = value * 18.942042;
  return imTbsp.toFixed(3);
};

const imCupToUsTbsp = function (value) {
  let usTbsp = value * 19.215199;
  return usTbsp.toFixed(3);
};

const imCupToImTbsp = function (value) {
  let imTbsp = value * 16;
  return imTbsp;
};

const imCupToMetTsp = function (value) {
  let metTsp = value * 56.826125;
  return metTsp.toFixed(3);
};

const imCupToUsTsp = function (value) {
  let usTsp = value * 57.645596;
  return usTsp.toFixed(3);
};

const imCupToImTsp = function (value) {
  let imTsp = value * 48;
  return imTsp;
};
