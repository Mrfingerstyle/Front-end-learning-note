### 解释为什么如下代码会打印 6 个 6

```javascript
let i = 0;
for (i = 0; i < 6; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

    程序执行结果 6 个 6
    因为 setTimeout 的 console.log(i); 的i是 var 定义的，所以是函数级的作用域，不属于 for 循环体，属于 global。等到 for 循环结束，i 已经等于 6 了，这个时候再执行 setTimeout 的五个回调函数，里面的 console.log(i); 的 i 去向上找作用域，只能找到 global下 的 i，即 6，所以输出都是 6。

### 写出让上面代码打印 0、1、2、3、4、5 的方法

```javascript
for (let i = 0; i < 6; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

### 除了使用 for let 配合，还有什么其他方法可以打印出 0、1、2、3、4、5

```javascript
for (var i = 0; i < 6; i++) {
  ((i) => {
    setTimeout(function () {
      console.log(i);
    }, 0);
  })(i);
}

let i;
for (i = 0; i < 6; i++) {
  const x = i;
  setTimeout(() => {
    console.log(x);
  });
}
```
