### 捕获与冒泡

        // 术语
        // 事件捕获 从外到内找监听函数
        // 事件冒泡 从内到外找监听函数
        // 开发者自己选择把监听函数 放在捕获阶段还是冒泡阶段

### W3C 事件模型

        // 2002 W3C 发布标准
        // 规定浏览器应该同时支持两种调用顺序
        // 首先 按 爷爷 爸爸 儿子 顺序看看有没有函数监听
        // 然后 按 儿子 爸爸 爷爷 顺序看看有没有函数监听
        // 有监听函数就调用 并提供时间信息 没有就跳过

### 取消冒泡

        // 取消冒泡
        // e.stopPropagation() 可中断冒泡 浏览器不再向上走

        // 特例
        // 只有一个div被监听 不考虑父子同时被监听
        // fn分别在捕获阶段 和 冒泡阶段监听click事件
        // 监听的元素 就是用户点击的元素
        // 谁先监听 谁先执行

### 自定义事件

```javascript
document.querySelector("#button1").addEventListener("click", (e) => {
  const event = new CustomEvent("frank", {
    detail: { name: "frank", age: 18 },
    bubbles: true,
    cancelable: false,
  });
  button1.dispatchEvent(event);
});

div1.addEventListener("frank", (e) => {
  console.log("触发 frank");
  console.log(e.detail);
});
```

### 事件委托

    场景 1 给 100 个按钮添加点击事件

```javascript
document.querySelector("#div1").addEventListener("click", (e) => {
  const t = e.target;
  if (t.tagName.toLowerCase() === "button") {
    console.log("button 被点击");
    console.log("button内容" + t.textContent);
    console.log("data-id" + t.dataset.id);
  }
});
```

    场景 2 监听当前不存在的元素的点击事件 递归方式

```javascript
function onFn(eventType, element, selector, fn) {
  if (!(element instanceof Element)) {
    element = document.querySelector(element);
  }
  // console.log(element);
  element.addEventListener(eventType, (e) => {
    let el = e.target;
    // 递归的判断点击的元素
    while (!el.matches(selector)) {
      if (element === el) {
        el = null;
        break;
      }
      el = el.parentNode;
    }
    el && fn.call(el, e, el);
  });
  return element;
}
// 封装一个事件委托
onFn("click", "#div1", "button", (e) => {
  console.log("button 被点击了");
  console.log(e);
});
```

```

```
