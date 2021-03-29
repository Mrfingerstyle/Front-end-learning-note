### MVC 三个对象分别做什么 代码实例

    MVC是一种现代编程的组织代码的思想
    M model 数据模型 负责操作所有数据
    V view 负责所有UI页面
    C control 负责其他
    案例 实现一个简易计算器的功能中 MVC的代码组织方式如下=>

```javascript
// M 数据
const m = {
  data: {
    n: parseInt(localStorage.getItem("n")),
  },
  create() {},
  delete() {},
  update(data) {
    Object.assign(m.data, data);
    eventBus.trigger("m_updated");
    localStorage.setItem("n", m.data.n);
  },
  get() {},
};

// V 视图
const v = {
  el: null,
  html: `
    <!-- 有数据存储功能的计算器 -->
    <div>
        <div class="output">
            <span id="number">{{n}}</span>
        </div>
        <div class="actions">
            <button id="add_1">+1</button>
            <button id="minus_1">-1</button>
            <button id="mul_1">*2</button>
            <button id="divide_1">/2</button>
        </div>
    </div>
    `,
  init(container) {
    v.el = $(container);
  },
  render(n) {
    if (v.el.children.length !== 0) v.el.empty();
    $(v.html.replace("{{n}}", n)).appendTo(v.el);
  },
};

// C 方法实现及初始化
const c = {
  init(container) {
    v.init(container);
    v.render(m.data.n);
    c.autoBindEvents();
    eventBus.on("m_updated", () => {
      v.render(m.data.n);
    });
  },
  events: {
    "click #add_1": "add",
    "click #minus_1": "minus",
    "click #mul_1": "mul",
    "click #divide_1": "divide",
  },
  add() {
    m.update({ n: m.data.n + 1 });
  },
  minus() {
    m.update({ n: m.data.n - 1 });
  },
  mul() {
    m.update({ n: m.data.n * 2 });
  },
  divide() {
    m.update({ n: m.data.n / 2 });
  },

  autoBindEvents() {
    for (let key in c.events) {
      const value = c[c.events[key]];
      // console.log(value);
      const spaceIndex = key.indexOf(" ");
      const part_1 = key.slice(0, spaceIndex);
      const part_2 = key.slice(spaceIndex + 1);
      // console.log(part_1);
      // console.log(part_2);
      // console.log(part_1, part_2, value)
      v.el.on(part_1, part_2, value);
    }
  },
};
```

### EventBus 作用 API

    EventBus 事件总线 主要用于处理对象之间的数据通信
    主要API如下

```javascript
// 声明对象
const eventBus = $(window);
// 设置触发事件
eventBus.trigger("m_updated");
// 设置事件监听
eventBus.on("m_updated", () => {
  v.render(m.data.n);
});
```

### 表驱动编程做什么

    表驱动编程的意义在于逻辑与数据的分离
    代码大全》对表驱动编程的描述：
    表驱动方法是一种使你可以在表中查找信息，而不必用逻辑语句（if 或 case）来把他们找出来的方法。事实上，任何信息都可以通过表来挑选。在简单的情况下，逻辑语句往往更简单而且更直接。但随着逻辑链的复杂，表就变得越来越富于吸引力了

```javascript
// if-else
function translate(term) {
  if (term === "1") {
    return "一";
  } else if (term === "2") {
    return "二";
  } else if (term === "3") {
    return "三";
  } else {
    return "？？？";
  }
}
// 表驱动
function translate(term) {
  let terms = {
    1: "一",
    2: "二",
    3: "三",
  };
  return terms[term];
}
```

### 如何理解模块化

    模块化主要是为了控制项目代码的高内聚 低耦合
    模块化的优点
        代码组织方式更合理
        代码排查错误更直观
        进行重构时不用考虑对其他代码部分的影响
