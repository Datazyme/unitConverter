//from milliliters to the rest
const mlToL = function (value) {
  let liters = value * 0.001;
  return liters;
};
const mlToµl = function (value) {
  let microliters = value * 1000;
  return microliters;
};
const mlToNl = function (value) {
  let nanoliters = value * 1e6;
  return nanoliters.toExponential(3);
};
const mlToPl = function (value) {
  let picoliters = value * 1e9;
  return picoliters.toExponential(3);
};
const mlToUsGal = function (value) {
  let usGallon = value * 0.000264172;
  return usGallon.toExponential(3);
};
const mlToUsQt = function (value) {
  let usQuart = value * 0.00105669;
  return usQuart.toExponential(3);
};
const mlToUsPt = function (value) {
  let usPint = value * 0.00211338;
  return usPint.toExponential(3);
};
const mlToUsFlOz = function (value) {
  let usFlOz = value * 0.033814;
  return usFlOz.toFixed(3);
};
const mlToImGal = function (value) {
  let imGal = value * 0.000219969;
  return imGal.toExponential(3);
};
const mlToImQt = function (value) {
  let imQuart = value * 0.000879877;
  return imQuart.toExponential(3);
};
const mlToImPt = function (value) {
  let imPint = value * 0.00175975;
  return imPint.toExponential(3);
};
const mlToImFlOz = function (value) {
  let imFlOz = value * 0.0351951;
  return imFlOz.toFixed(3);
};

//cooking conversions
const mlToMetCups = function (value) {
  let metCups = value * 0.0004;
  return metCups.toExponential(3);
};

const mlToUsCups = function (value) {
  let usCups = value * 0.0004227;
  return usCups.toExponential(3);
};

const mlToImCups = function (value) {
  let imCups = value * 0.000352;
  return imCups.toExponential(3);
};

const mlToMetTbsp = function (value) {
  let metTbsp = value * 0.066667;
  return metTbsp.toExponential(3);
};

const mlToUsTbsp = function (value) {
  let usTbsp = value * 0.067628;
  return usTbsp.toFixed(3);
};

const mlToImTbsp = function (value) {
  let imTbsp = value * 0.056312;
  return imTbsp.toFixed(3);
};

const mlToMetTsp = function (value) {
  let metTsp = value * 0.2;
  return metTsp.toFixed(3);
};

const mlToUsTsp = function (value) {
  let usTsp = value * 0.202884;
  return usTsp.toFixed(3);
};

const mlToImTsp = function (value) {
  let imTsp = value * 0.168936;
  return imTsp.toFixed(3);
};

const mlToGm = function (value) {
  let Gm = value * 1;
  return Gm.toFixed(3);
};
