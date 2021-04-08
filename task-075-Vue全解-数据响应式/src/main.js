// import Vue from 'vue'
// import App from './App.vue'

const Vue = window.Vue
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

/*
const myData = {
  n: 0
}
console.log(myData);

const vm = new Vue({
  data: myData,
  template:`<div>{{n}}&nbsp;&nbsp;&nbsp;<button @click="add">+10</button></div>`,
  methods: {
    add(){
      this.n += 10
    }
  }
})
vm.$mount('#app')

setTimeout(()=>{
  myData.n += 10
  console.log(myData);
  console.log(vm);
}, 3000)
*/

// n: (...) 
// 并不存在一个叫做n的属性
// 只是可以对这个 n 做 get set 操作

/*
new Vue({
  data () {
    return {
      obj: {
        a:0,
        // 1 提前写好所有key
        // b: undefined

      }
    }
  },
  template: `
  <div>
    {{obj.b}}
    <button @click='setB'>setB</button>
  </div>
  `,
  methods: {
    setB(){
      // this.obj.b = 1
      // 2 第二种方法
      // Vue.set(this.obj, 'b', 1)
      this.$set(this.obj, 'b', 1)
      // 作用
      // 新增key
      // 自动创建代理和监听 如果没创建的话
      // 触发UI更新 但不是立即更新
    }
  }
}).$mount('#app')
*/

new Vue({
  data:{
      array: ['a', 'b', 'c']
  },
  template: `
  <div>
    {{array}}
    <button @click='setD'>setD</button>
  </div>
  `,
  methods: {
    setD(){
      // this.array[3] = '1'
      // 这样也可 但是数组操作都要用set 很麻烦
      // 数组长度很难预测
      // this.$set(this.array, 3, 'd')
      // 此时 并不会自动添加监听和代理
      // this.$set(this.array, 3, 1)
      // this.array[3] += 1
    
      this.array.push('d')
      // 此处的push不是JS原生的push 是Vue篡改了原始的API
      // 其他6个数组方法也是
      // 这些方法会触发更新
      // console.log(this.array);
      console.log(this.array);
      
    }
  }
}).$mount('#app')
