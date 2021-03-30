// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
// console.log(window.Vue);

// new window.Vue({
//   el: '#app',
//   // 不完整版本需要这样写才可以 
//   render(h){
//     return h('div', [this.n, h('button', {on:{click: this.add}} ,'+1')])
//   },
//   data: {
//     n: 0
//   },
//   methods: {
//     add() {
//       this.n += 1
//     }
//   }
// }) 

import Demo from './Demo.vue'
console.log(Demo);
console.log(Demo.render.toString());

new window.Vue({
  el: '#app',
  render(h) {
    return h(Demo)
  }
}) 
