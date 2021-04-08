function Person() {
    let that = this
    that.age = 0
    
    setInterval(function growUp() {
        that.age++
    }, 1000)
}

function Person_arrow() {
    this.age = 0
    
    setInterval(() => {
        this.age++
    }, 1000)
}

// 由于 箭头函数没有自己的this指针，通过 call() 或 apply() 方法调用一个函数时，只能传递参数（不能绑定this---译者注），他们的第一个参数会被忽略

var adder = {
    base : 1,
  
    add : function(a) {
      var f = v => v + this.base;
      return f(a);
    },
  
    addThruCall: function(a) {
      var f = v => v + this.base;
      var b = {
        base : 2
      };
  
      return f.call(b, a);
    }
  };
  
//   console.log(adder.add(1));         // 输出 2
//   console.log(adder.addThruCall(1)); // 仍然输出 2

//   arguments只是引用了封闭作用域内的arguments

// var arguments_ = [1, 2, 3];
// var arr = () => arguments_[0];
// arr(); // 1

function foo(n) {
  var f = () => arguments[0] + n; // 隐式绑定 foo 函数的 arguments 对象. arguments[0] 是 n,即传给foo函数的第一个参数
  return f();
}

foo(1); // 2
foo(2); // 4
foo(3); // 6

// 箭头函数不能用作构造器，和 new一起用会抛出错误
// 箭头函数没有prototype属性
// 箭头函数不能用作函数生成器




