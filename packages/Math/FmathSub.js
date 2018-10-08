import mathMul from './FmathMul';
// 浮点数相减
const mathSub = (a, b) => {
  var c, d, e;
  try {
    c = a.toString().split('.')[1].length;
  } catch (f) {
    c = 0;
  }
  try {
    d = b.toString().split('.')[1].length;
  } catch (f) {
    d = 0;
  }
  return (e = Math.pow(10, Math.max(c, d))), (mathMul(a, e) - mathMul(b, e)) / e;
};
module.exports = mathSub;
