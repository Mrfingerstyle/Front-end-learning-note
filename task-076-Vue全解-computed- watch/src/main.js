/*
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
*/

const Vue = window.Vue

// 阻止启动生产消息，常用作指令
Vue.config.productionTip = false

// 展示用户名 计算属性
// new Vue({
//   data () {
//     return {
//       user: {
//         name: 'ly',
//         email: 'xxx@qq.com',
//         phone: 'xxxxxxxxxx'
//       }
//     }
//   },
//   computed: {
//     displayName:{
//       get() {
//         const user = this.user
//         return user.name || user.email || user.phone
//       },
//       set(value) {
//         console.log(value);
//         this.user.name = 'll'
//       }
//     }
//   },
//   template: `
//   <div>
//     {{displayName}}
//     <div>
//     {{displayName}}
//     <button @click='add'>set</button>
//     </div>
//   </div>
//   `,
//   methods: {
//     add(){
//       this.user.name = 'll'
//     }
//   }
// }).$mount('#app')

// 展示列表 未使用计算属性
// let id = 0
// const createUser = (name, gender) => {
//   id += 1
//   return {
//     id: id,
//     name: name, 
//     gender: gender
//   }
// }
// new Vue({
//   data () {
//     return {
//       user: [
//         createUser('ds', 'man'),
//         createUser('es', 'woman'),
//         createUser('dd', 'man'),
//         createUser('gf', 'woman')
//       ],
//       displayUsers:[]
//     }
//   },
//   created () {
//     this.displayUsers = this.user
//   },
//   template: `
//   <div>
//     <div>
//       <button @click="all">全部</button>
//       <button @click="showMale">男</button>
//       <button @click="showFemale">女</button>
//     </div>
//     <ul>
//       <li v-for="(u,index) in displayUsers" :key="index">{{u.name}} - {{u.gender}}</li>
//     </ul>
//   </div>
//   `,
//   methods: {
//     showMale(){
//       this.displayUsers = this.user.filter(u => u.gender === 'man')
//     },
//     showFemale(){
//       this.displayUsers = this.user.filter(u => u.gender === 'woman')
//     },
//     all(){
//       this.displayUsers = this.user
//     }
//   }
// }).$mount('#app')

// 展示列表 使用计算属性
// let id = 0
// const createUser = (name, gender) => {
//   id += 1
//   return {
//     id: id,
//     name: name, 
//     gender: gender
//   }
// }
// new Vue({
//   data () {
//     return {
//       user: [
//         createUser('ds', 'man'),
//         createUser('es', 'woman'),
//         createUser('dd', 'man'),
//         createUser('gf', 'woman')
//       ],
//       gender: ''
//     }
//   },
//   computed: {
//     displayUsers(){
//       const hash = {
//         male: 'man', 
//         female: 'woman'
//       }
//       const {user, gender} = this
//       if (gender === '') {
//         return user
//       } else if (typeof gender === 'string') {
//         console.log(user);
//         return user.filter(u => u.gender === hash[gender])
//       } else {
//         throw new Error('gender的值是意外的值')
//       }
//     }
//   },

//   template: `
//   <div>
//     <div>
//       <button @click="setGender('')">全部</button>
//       <button @click="setGender('male')">男</button>
//       <button @click="setGender('female')">女</button>
//     </div>
//     <ul>
//       <li v-for="(u,index) in displayUsers" :key="index">{{u.name}} - {{u.gender}}</li>
//     </ul>
//   </div>
//   `,
//   methods: {
//     setGender(string) {
//       this.gender = string;
//     }
//   },
// }).$mount('#app')

// 注意 
// 如果依赖的属性没有变化 就不会重新计算
// setter getter默认不会做缓存 Vue做了特殊处理

// watch 监听/侦听
// 用途 数据变化时 执行一个函数
// new Vue({
//   data () {
//     return {
//       n: 0,
//       history: [], 
//       // 是否处于撤销模式
//       isUndoMode: false
//     }
//   },
//   watch: {
//     // 实时监听n
//     n(newValue, oldValue){
//       console.log(this.isUndoMode);
//       if(!this.isUndoMode) {
//         this.history.push({
//           from: oldValue,
//           to: newValue
//         })
//       }
//     }
//   },
//   template: `
//   <div>
//     {{n}}
//     <hr/>
//     <button @click='add1'>+1</button>
//     <button @click='add2'>+2</button>
//     <button @click='minus1'>-1</button>
//     <button @click='minus2'>-2</button>
//     <hr/>
//     <button @click='undo'>撤销</button>
//     <hr/>
//     {{history}}
//   </div>
//   `,
//   methods: {
//     add1(){
//       this.n += 1
//     },
//     add2(){
//       this.n += 2
//     },
//     minus1(){
//       this.n -= 1
//     },
//     minus2(){
//       this.n -= 2
//     },
//     undo(){
//       const last = this.history.pop()
//       console.log(last);
//       const old = last.from
//       this.isUndoMode = true
//       this.n = old 
//       // 此处有bug
//       // 注意 此时撤销的操作也会被watch到

//       // watch是异步的
//       this.$nextTick(()=>{
//         this.isUndoMode = false
//       }, 0)
      

//     }
//   }
// }).$mount('#app')

// 模拟computed 
// new Vue({
//   data: {
//     user: {
//       email: "fangfang@qq.com",
//       nickname: "方方",
//       phone: "13812312312"
//     },
//     displayName: ""
//   },
//   watch: {
//     "user.email": {
//       handler: "changed",
//       immediate: true // 第一次渲染是也触发 watch
//     },
//     "user.nickname": {
//       handler: "changed",
//       immediate: true // 第一次渲染是也触发 watch
//     },
//     "user.phone": {
//       handler: "changed",
//       immediate: true // 第一次渲染是也触发 watch
//     }
//   },
//   // 不如用 computed 来计算 displayName
//   template: `
//     <div>
//        {{displayName}}
//        <button @click="user.nickname=undefined">remove nickname</button>
//     </div>
//   `,
//   methods: {
//     changed() {
//       console.log(arguments);
//       const user = this.user;
//       this.displayName = user.nickname || user.email || user.phone;
//     }
//   }
// }).$mount('#app')

// watch deep 测试对象内属性变化对象会不会变化

new Vue({
  data () {
    return {
      n: 0,
      obj: {
        a: 'a',
        b: 'b'
      }
    }
  },
  template: `
    <div>
      <button @click='n += 1'>n += 1</button>
      <button @click="obj.a += 'hi'">obj.a += 'hi'</button>
      <button @click="obj = {a: 'a'}">obj = {a: 'a'}</button>
    </div>
  `,
  created () {
    this.$watch('n', function(){
      console.log('n变了----');
    }, { immediate: true })
    
  },
  // 优先使用这种
  watch: {
    n: function(){
      console.log('n变了');
    },
    obj:{
      handler() {
        console.log('obj变了');
      },
      // 默认是false 只看表层的地址
      deep: true
    },
    "obj.a":function(){
      console.log('obj.a变了 ');
    },
    "obj.b":function(){
      console.log('obj.b变了 ');
    }
  }
}).$mount('#app')
// 简单类型变了 那就是变了 
// 对象内的简单类型变了 那也是对象内属性变了 
// 只有对象的地址变了 那才是对象变了
// 简单类型看值 复杂类型看地址
// 这其实就是 === 规则

// watch也可以这样写

// 如果属性变了  就算对象变了 怎么办 
// 设置deep true  



