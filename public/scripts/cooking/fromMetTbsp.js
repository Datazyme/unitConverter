//from Metric Tbsp to the rest
const metTbspToMl = function (value) {
  let ml = value * 15;
  return ml;
};

const metTbspToMetCups = function (value) {
  let metCups = value * 0.06;
  return metCups.toFixed(3);
};

const metTbspToUsCups = function (value) {
  let usCups = value * 0.063401;
  return usCups.toFixed(3);
};

const metTbspToImCups = function (value) {
  let imCups = value * 0.052793;
  return imCups.toFixed(3);
};

const metTbspToUsTbsp = function (value) {
  let usTbsp = value * 1.014421;
  return usTbsp.toFixed(3);
};

const metTbspToImTbsp = function (value) {
  let imTbsp = value * 0.844682;
  return imTbsp.toFixed(3);
};

const metTbspToMetTsp = function (value) {
  let metTsp = value * 3;
  return metTsp;
};

const metTbspToUsTsp = function (value) {
  let usTsp = value * 3.043262;
  return usTsp.toFixed(3);
};

const metTbspToImTsp = function (value) {
  let imTsp = value * 2.534046;
  return imTsp.toFixed(3);
};
