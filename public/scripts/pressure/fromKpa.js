//from kilopascals to the rest
const kPaToPa = function (value) {
  let pa = value * 1000;
  return pa.toExponential(3);
};

const kpaToBar = function (value) {
  let bar = value * 0.01;
  return bar.toFixed(3);
};

const kpaToTorr = function (value) {
  let torr = value * 7.50062;
  return torr.toFixed(3);
};

const kpaToPsi = function (value) {
  let psi = value * 0.145038;
  return psi.toFixed(3);
};

const kpaToAtm = function (value) {
  let atm = value * 0.00986923;
  return atm.toFixed(3);
};

const kpaToInHg = function (value) {
  let inHg = value * 0.2953;
  return inHg.toFixed(3);
};
