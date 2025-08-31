//from psi to the rest
const psiToPa = function (value) {
  let pa = value * 6894.76;
  return pa.toFixed(3);
};

const psiToKpa = function (value) {
  let kpa = value * 6.89476;
  return kpa.toFixed(3);
};

const psiToBar = function (value) {
  let bar = value * 0.0689476;
  return bar.toFixed(3);
};

const psiToTorr = function (value) {
  let torr = value * 51.7149;
  return torr.toFixed(3);
};

const psiToAtm = function (value) {
  let atm = value * 0.068046;
  return atm.toFixed(3);
};

const psiToInHg = function (value) {
  let inHg = value * 2.03602;
  return inHg.toFixed(3);
};
