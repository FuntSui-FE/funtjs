# funtjs

## How to Use ?

### BROWSER :

> 下载 public 下的 funtjs.min.js 使用,支持 umd 通用模块规范.

```html
<script src="./funtjs.min.js"></script>
<script>
  var res = funtjs.FmathAdd(0.2, 0.2);
</script>
```

### NPM :

```shell
npm install --save -dev funtjs
```

**完整引入**

```js
import funtjs from 'funtjs';

funtjs.FmathAdd(0.1, 0.2); //0.3
```

**按需引入**

```js
import { FmathAdd } from 'funtjs';

FmathAdd(0.1, 0.2); //0.3
```
