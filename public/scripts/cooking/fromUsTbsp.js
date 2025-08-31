//from Metric Tbsp to the rest
const usTbspToMl = function (value) {
  let ml = value * 14.786765;
  return ml.toFixed(3);
};

const usTbspToMetCups = function (value) {
  let metCups = value * 0.059147;
  return metCups.toFixed(3);
};

const usTbspToUsCups = function (value) {
  let usCups = value * 0.0625;
  return usCups.toFixed(3);
};

const usTbspToImCups = function (value) {
  let imCups = value * 0.052042;
  return imCups.toFixed(3);
};

const usTbspToMetTbsp = function (value) {
  let metTbsp = value * 0.985784;
  return metTbsp.toFixed(3);
};

const usTbspToImTbsp = function (value) {
  let imTbsp = value * 0.832674;
  return imTbsp.toFixed(3);
};

const usTbspToMetTsp = function (value) {
  let metTsp = value * 2.957353;
  return metTsp.toFixed(3);
};

const usTbspToUsTsp = function (value) {
  let usTsp = value * 3;
  return usTsp;
};

const usTbspToImTsp = function (value) {
  let imTsp = value * 2.498023;
  return imTsp.toFixed(3);
};
