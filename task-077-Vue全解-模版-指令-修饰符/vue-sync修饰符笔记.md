### .sync 修饰符

    vue 修饰符sync的功能是：当一个子组件改变了一个 prop 的值时，这个变化也会同步到父组件中所绑定

    如果我们不用.sync，我们想做上面的那个弹窗功能，我们也可以props传初始值，然后事件监听

### 使用方法

    父组件

```html
<div class="app">
  现在有{{total}}
  <hr />
  <child :money="total" v-on:update:money="total=$event" />
  <!-- 等价 -->
  <child :money.sync="total" />
</div>
```

    子组件

```html
<div class="child">
  {{money}}
  <button @click="$emit('update:money', money-100)">
    <span>花钱</span>
  </button>
</div>
```

### 使用场景及规则

    常见数据场景
    我把一个数据给你 你要改变数据的时候要通知我

    .sync修饰符
    Vue规则 组件不能修改props外部数据
    Vue规则 $emit 可以触发事件 并传参
    Vue规则 $event 可以获取 $emit的参数

    这种参数很常见
    <child :money="total" v-on:update:money="total=$event"/>
    等价
    <child :money.sync="total"/>

    .sync 属于 语法糖
