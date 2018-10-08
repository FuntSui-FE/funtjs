import mathSub from 'packages/Math/FmathSub';
describe('[FmathSub API]', function() {
  it(`funtjs.FmathSub test`, function() {
    const res = mathSub(0.3, 0.2);
    assert.equal(res, 0.1);
  });
});
