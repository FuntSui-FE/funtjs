import mathMul from 'packages/Math/FmathMul';
describe('[FmathMul API]', function() {
  it(`funtjs.FmathMul test`, function() {
    const res = mathMul(0.1, 0.2);
    assert.equal(res, 0.02);
  });
});
