//from Metric Cups to the rest
const metCupToMl = function (value) {
  let ml = value * 250;
  return ml;
};

const metCupToUsCups = function (value) {
  let usCups = value * 1.056688;
  return usCups.toFixed(3);
};

const metCupToImCups = function (value) {
  let imCups = value * 0.879877;
  return imCups.toFixed(3);
};

const metCupToMetTbsp = function (value) {
  let metTbsp = value * 16.666667;
  return metTbsp.toFixed(3);
};

const metCupToUsTbsp = function (value) {
  let usTbsp = value * 16.907011;
  return usTbsp.toFixed(3);
};

const metCupToImTbsp = function (value) {
  let imTbsp = value * 14.078032;
  return imTbsp.toFixed(3);
};

const metCupToMetTsp = function (value) {
  let metTsp = value * 50;
  return metTsp;
};

const metCupToUsTsp = function (value) {
  let usTsp = value * 50.721034;
  return usTsp.toFixed(3);
};

const metCupToImTsp = function (value) {
  let imTsp = value * 42.234096;
  return imTsp.toFixed(3);
};
