import mathMul from './FmathMul';
//浮点数相加
const mathAdd = (a, b) => {
  a = a ? a : 0;
  b = b ? b : 0;
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
  return (e = Math.pow(10, Math.max(c, d))), (mathMul(a, e) + mathMul(b, e)) / e;
};

module.exports = mathAdd;
