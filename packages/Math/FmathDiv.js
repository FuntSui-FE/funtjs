import mathMul from './FmathMul';
// 浮点数相除
const mathdiv = (a, b) => {
  var c,
    d,
    e = 0,
    f = 0;
  try {
    e = a.toString().split('.')[1].length;
  } catch (g) {}
  try {
    f = b.toString().split('.')[1].length;
  } catch (g) {}
  return (
    (c = Number(a.toString().replace('.', ''))),
    (d = Number(b.toString().replace('.', ''))),
    mathMul(c / d, Math.pow(10, f - e))
  );
};
module.exports = mathdiv;
