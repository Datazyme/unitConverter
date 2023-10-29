//from Torr/mmHg to the rest
const torrToPa = function (value) {
  let pa = value * 133.322;
  return pa.toFixed(3);
};

const torrToKpa = function (value) {
  let kpa = value * 0.133322;
  return kpa.toFixed(3);
};

const torrToBar = function (value) {
  let bar = value * 0.00133322;
  return bar.toExponential(3);
};

const torrToPsi = function (value) {
  let psi = value * 0.0193368;
  return psi.toFixed(3);
};

const torrToAtm = function (value) {
  let atm = value * 0.00131579;
  return atm.toExponential(3);
};

const torrToInHg = function (value) {
  let inHg = value * 0.0393701;
  return inHg.toFixed(3);
};
