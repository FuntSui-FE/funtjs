/**
 * @desc webpack打包入口文件
 * @example 自动引入子目录下所有js文件
 */
let funtJs = {};

const r = require.context('./', true, /^\.\/.+\/.+\.js$/);
r.keys().forEach(key => {
  let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
  funtJs[attr] = r(key);
});

module.exports = funtJs;
