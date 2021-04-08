/*
var x = 1
{
    var x = 2
}
console.log(x); 2
*/

/*
let x = 1;
{
    let x = 2;
}
console.log(x); // 输出 1
*/

// 使用let声明的变量在块级作用域内能强制执行更新变量
var a = []
for (let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    }
}

a[0]()
a[1]()
a[6]()

// foo('outside');  // TypeError: foo is not a function
{
  function foo(location) {
   console.log('foo is called ' + location);
  }
  foo('inside'); // 正常工作并且打印 'foo is called inside'
}

// 位于函数或代码顶部的var声明会给全局对象新增属性, 而let不会
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined

