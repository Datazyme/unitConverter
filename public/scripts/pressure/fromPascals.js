//from Pascals to the rest
const paToKpa = function (value) {
  let kpa = value * 0.001;
  return kpa.toExponential(3);
};

const paToBar = function (value) {
  let bar = value * 1e-5;
  return bar.toExponential(3);
};

const paToTorr = function (value) {
  let torr = value * 0.00750062;
  return torr.toFixed(3);
};

const paToPsi = function (value) {
  let psi = value * 0.000145038;
  return psi.toExponential(3);
};

const paToAtm = function (value) {
  let atm = value * 9.8692e-6;
  return atm.toExponential(3);
};

const paToInHg = function (value) {
  let inHg = value * 0.0002953;
  return inHg.toExponential(3);
};
