import './app_2.css'
// import $ from 'jquery'
// import Model from './base/Model'
// import View from './base/View'
// import EventBus from './base/EventBus'
import Vue from 'vue'


// const eventBus = $(window)
// 将EventBus抽象成类 可以随时改变实现方式 便于修改
// 解耦思想

// const eventBus = new EventBus()

// const localKey = 'app2.index'


// const m = new Model({
//     data: {
//         index: parseInt(localStorage.getItem(localKey)) || 0
//     },
//     update: function (data) {
//         Object.assign(m.data, data)
//         m.trigger('m_updated')
//         localStorage.setItem(localKey, m.data.index)
//     }
// })

// 合并vc
const init = (el) => {
    new Vue({
        el: el,
        data: {
            index: parseFloat(localStorage.getItem('app2.index'))
        },
        template: `
        <!-- tabBar -->
            <section id="app_2">
            <ol class="tabBar">
                <li :class="index === 0 ? 'selected' : ''" @click="index=0"><span>1111</span></li>
                <li :class="index === 1 ? 'selected' : ''" @click="index=1"><span>2222</span></li>
            </ol>
            <ol class="tabContent">
                <li :class="index === 0 ? 'active' : ''">内容1</li>
                <li :class="index === 1 ? 'active' : ''">内容2</li>
            </ol>
            </section>
        `,
        watch: {
            index: function() {
                localStorage.setItem('app2.index', this.index)
            }
        }
    })
}

export default init