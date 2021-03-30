### 两个版本对应的文件名

    vue.js 完整版
    vue.runtime.js 非完整版

### 两个版本 Vue 区别

|               |               vue.js               |          vue.runtime.js          |
| :-----------: | :--------------------------------: | :------------------------------: |
|     特点      |            有 complier             |          没有 complier           |
|     视图      | 写在 HTML 里或者写在 template 选项 | 写在 render 函数中 用 h 创建函数 |
|   cdn 引入    |               vue.js               |          vue.runtime.js          |
| webpack 引入  |            需要额外配置            |          默认使用次版本          |
| @vue/cli 引入 |            需要额外配置            |          默认使用次版本          |

### template 和 render 怎么用

```javascript
// template
new Vue({
  el: "#app",
  data: {
    n: 0,
  },
  methods: {
    add() {
      this.n += 1;
    },
  },
  template: `<h4>我是模版</h4>`,
});
```

```javascript
// render
import Demo from "./Demo.vue";

new Vue({
  el: "#app",
  render(h) {
    return h(Demo);
  },
});
```

### 教读者如何用 codesandbox.io 写 Vue 代码

    进入网站
    create sandbox
    然后选择创建的类型 Vue React均可
    可以实时预览
