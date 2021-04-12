/*
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
*/

import Vue from 'vue'
// import xxx from './xxx.vue'

import sync from './sync-demo.vue'
// const Vue = window.Vue
Vue.config.productionTip = false

new Vue({
  // 此时使用的Vue非完整版 所以使用render

  render: h => h(sync),
}).$mount('#app')



