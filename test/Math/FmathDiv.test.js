import mathDiv from 'packages/Math/FmathDiv';
describe('[FmathDiv API]', function() {
  it(`funtjs.FmathDiv test`, function() {
    const res = mathDiv(0.1, 0.2);
    assert.equal(res, 0.5);
  });
});
