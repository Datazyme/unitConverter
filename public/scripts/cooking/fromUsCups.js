//from US Cups to the rest
const usCupToMl = function (value) {
  let ml = value * 236.588237;
  return ml.toFixed(3);
};

const usCupToMetCups = function (value) {
  let metCups = value * 0.946353;
  return metCups.toFixed(3);
};

const usCupToImCups = function (value) {
  let imCups = value * 0.832674;
  return imCups.toFixed(3);
};

const usCupToMetTbsp = function (value) {
  let metTbsp = value * 15.772549;
  return metTbsp.toFixed(3);
};

const usCupToUsTbsp = function (value) {
  let usTbsp = value * 16;
  return usTbsp.toFixed(3);
};

const usCupToImTbsp = function (value) {
  let imTbsp = value * 13.322787;
  return imTbsp.toFixed(3);
};

const usCupToMetTsp = function (value) {
  let metTsp = value * 47.317647;
  return metTsp.toFixed(3);
};

const usCupToUsTsp = function (value) {
  let usTsp = value * 48;
  return usTsp.toFixed(3);
};

const usCupToImTsp = function (value) {
  let imTsp = value * 39.968361;
  return imTsp.toFixed(3);
};
