import mathAdd from 'packages/Math/FmathAdd';
describe('[FmathAdd API]', function() {
  it(`funtjs.FmathAdd test`, function() {
    const res = mathAdd(0.1, 0.2);
    assert.equal(res, 0.3);
  });
});
