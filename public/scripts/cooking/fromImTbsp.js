//from Imperial Tbsp to the rest
const imTbspToMl = function (value) {
  let ml = value * 17.758164;
  return ml.toFixed(3);
};

const imTbspToMetCups = function (value) {
  let metCups = value * 0.071033;
  return metCups.toFixed(3);
};

const imTbspToUsCups = function (value) {
  let usCups = value * 0.075059;
  return usCups.toFixed(3);
};

const imTbspToImCups = function (value) {
  let imCups = value * 0.0625;
  return imCups.toFixed(3);
};

const imTbspToMetTbsp = function (value) {
  let metTbsp = value * 1.183878;
  return metTbsp.toFixed(3);
};

const imTbspToUsTbsp = function (value) {
  let usTbsp = value * 1.20095;
  return usTbsp.toFixed(3);
};

const imTbspToMetTsp = function (value) {
  let metTsp = value * 3.551633;
  return metTsp.toFixed(3);
};

const imTbspToUsTsp = function (value) {
  let usTsp = value * 3.60285;
  return usTsp.toFixed(3);
};

const imTbspToImTsp = function (value) {
  let imTsp = value * 3;
  return imTsp;
};
