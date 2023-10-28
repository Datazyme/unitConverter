//from USTeaspoons to the rest
const usTspToMl = function (value) {
  let ml = value * 4.928922;
  return ml.toFixed(3);
};

const usTspToMetCups = function (value) {
  let metCups = value * 0.019716;
  return metCups.toFixed(3);
};

const usTspToUsCups = function (value) {
  let usCups = value * 0.020833;
  return usCups.toFixed(3);
};

const usTspToImCups = function (value) {
  let imCups = value * 0.017347;
  return imCups.toFixed(3);
};

const usTspToMetTbsp = function (value) {
  let metTbsp = value * 0.328595;
  return metTbsp.toFixed(3);
};

const usTspToUsTbsp = function (value) {
  let usTbsp = value * 0.333333;
  return usTbsp.toFixed(3);
};

const usTspToImTbsp = function (value) {
  let imTbsp = value * 0.277558;
  return imTbsp.toFixed(3);
};

const usTspToMetTsp = function (value) {
  let metTsp = value * 0.985784;
  return metTsp.toFixed(3);
};

const usTspToImTsp = function (value) {
  let imTsp = value * 0.832674;
  return imTsp.toFixed(3);
};
