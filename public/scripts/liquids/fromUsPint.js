//from US pints to the rest
const usPtToL = function (value) {
  let liters = value * 0.473176;
  return liters.toFixed(3);
};
const usPtToMl = function (value) {
  let milliliters = value * 473.176;
  return milliliters.toFixed(3);
};
const usPtToµl = function (value) {
  let microliters = value * 473176;
  return microliters.toExponential(3);
};
const usPtToNl = function (value) {
  let nanoliters = value * 4.732e8;
  return nanoliters.toExponential(3);
};
const usPtToPl = function (value) {
  let picoliter = value * 4.732e11;
  return picoliter.toExponential(3);
};
const usPtToUsGal = function (value) {
  let usGallon = value * 0.125;
  return usGallon.toFixed(3);
};
const usPtToUsQt = function (value) {
  let usQuart = value * 0.5;
  return usQuart;
};
const usPtToUsFlOz = function (value) {
  let usFlOz = value * 16;
  return usFlOz;
};
const usPtToImGal = function (value) {
  let imGal = value * 0.104084;
  return imGal.toFixed(3);
};
const usPtToImQt = function (value) {
  let imQuart = value * 0.416337;
  return imQuart.toFixed(3);
};
const usPtToImPt = function (value) {
  let imPint = value * 0.832674;
  return imPint.toFixed(3);
};
const usPtToImFlOz = function (value) {
  let imFlOz = value * 16.6535;
  return imFlOz.toFixed(3);
};
