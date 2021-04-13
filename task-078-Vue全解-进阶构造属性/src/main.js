import Vue from 'vue'
import App from './App.vue'
// import MyVue from './MyVue'
Vue.config.productionTip = false

// Vue.directive('x', {
  //   inserted: function(el){
    //     el.addEventListener('click', ()=>{
      //       console.log('x');
      //     })
      //   }
      // })
      
      new Vue({
          render: h => h(App),
        }).$mount('#app')
        
        // const Vue = window.Vue
        // Vue.config.productionTip = false

/*
new Vue({
  directives: {
    'on2': {
      inserted(el, info){
        // console.log(el);
        // console.log(info);
        // console.log(info.value);
        el.addEventListener(info.arg, info.value)
      },
      unbind(el, info){
        el.removeEventListener(info.arg, info.value)
      }
    }
  },
  template: `
  <button v-on2:click=hi>hi</button>
  `,
  methods: {
    hi(){
      console.log('hi--');
    },
  },
}).$mount('#app')
*/


