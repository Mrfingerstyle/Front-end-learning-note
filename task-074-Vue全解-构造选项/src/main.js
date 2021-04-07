// import Vue from 'vue'
// import App from './App.vue'

const Vue = window.Vue
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

// 使用从外部引入的完整版Vue

// 引入组件 这种方式优先使用
import Demo from './Demo.vue'
// Demo实际上是对象

// new Vue({
//   el: '#app',
//   render: h=> h(Demo)
// }) 

// new Vue({
//   render: h=> h(Demo)
// }).$mount('#frank')

// 或者直接引入组件 
// 也可以两种方式混合使用
// Vue.component('demo2', {
//   template: `<div>demo2</div>`,
// })




// 此处new 的是 Vue实例 或 Vue对象
new Vue({
  // data: {
  //   n: 0
  // },

  // data: function() {
  //   return {
  //     n: 0
  //   }
  // },

  // components: {
  //   // frank对应的是Demo组件
  //   // frank: Demo,
  //   // 这种方式也可
  //   // Demo: Demo,
  //   Demo
  // },

  // components: {
  //   frank: {
  //          data() {
  //           return {n: 0}
  //          },
  //       template: `<div>demo2 {{n}} </div>`,
  //   }
  // },


  // 也可以使用缩写语法
  
  // 这种方式简单些
  // render: (h) => h(Demo)

  components: {
    Demo
  },
  data () {
    return {
      visible: true,
      n: 0
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible
    },
    add() {
      this.n += 1
    }
  },
  template:`
  <!-- <div>
  <button @click='toggle'>toggle</button>
  <Demo v-if="visible===true" />
  </div> -->
  <div>
  <!-- 
    // 这种方式只能传字符串
    // <Demo message="hello props"/>
    
    // 传递内部数据
    // 数字
    <Demo :message="n"/>
    // 字符串
    <Demo :message="  '0'   "/>
    // 传递方法
    <Demo :fn="add"/>
    -->
    
    {{n}}
    <Demo :message="n" :fn="add"/>
    // 可以传变量 函数 字符串



  </div>
  `
}).$mount('#frank')
