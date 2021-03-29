import './app_1.css'
// import $ from 'jquery'
// console.log($);
// import Model from './base/Model'
// import View from './base/View'
// import EventBus from './base/EventBus'

import Vue from 'vue'
// console.log(Vue);

// const eventBus = new EventBus()

// console.log(eventBus.on);
// console.log(eventBus.trigger);

// 数据相关都放到M


// 视图相关都放到V

// 其他的都放到C
const init = (el)=> {
    const eventBus = new Vue()
    console.log(eventBus.$on);
    console.log(eventBus.$off);
    console.log(eventBus.$emit);
    
    const m = {
        get(){
            return parseFloat(localStorage.getItem('n'))
        },
        set(n) {
            localStorage.setItem('n', n)
        }
    }
    new Vue({
        el: el,
        data:{
            n: m.get()
        },
        methods: {
            add() {
                this.n += 1
            },
            minus() {
                this.n -= 1
            },
            mul() {
                this.n *= 2
            },
            divide() {
                this.n /= 2
            },
        },
        watch: {
            // 此处的函数不能使用箭头函数 因为箭头函数中的this是window
            n: function() {
                m.set(this.n)
            }
        },
        template: `
        <!-- 有数据存储功能的计算器 -->
        <section id="app_1">
            <div class="output">
                <span id="number">{{n}}</span>
            </div>
            <div class="actions">
                <button @click="add">+1</button>
                <button @click="minus">-1</button>
                <button @click="mul">*2</button>
                <button @click="divide">/2</button>
            </div>
        </section>
        `
    })
}

export default init

// Vue 基本做到了MVC简化代码的极致 
// 不太可能再简化了
