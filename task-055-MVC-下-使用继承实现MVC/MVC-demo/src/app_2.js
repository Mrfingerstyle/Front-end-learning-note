import './app_2.css'
import $ from 'jquery'
import Model from './base/Model'
import View from './base/View'
import EventBus from './base/EventBus'


// const eventBus = $(window)
// 将EventBus抽象成类 可以随时改变实现方式 便于修改
// 解耦思想

// const eventBus = new EventBus()

const localKey = 'app2.index'


const m = new Model({
    data: {
        index: parseInt(localStorage.getItem(localKey)) || 0
    },
    update: function (data) {
        Object.assign(m.data, data)
        m.trigger('m_updated')
        localStorage.setItem(localKey, m.data.index)
    }
})

// 合并vc
const init = (el) => {
    new View({
        el: el,
        data: m.data,
        // eventBus: eventBus,
        html:(index)=>{ 
            return `
            <!-- tabBar -->
            <div>
            <ol class="tabBar">
            <li class="${index === 0 ? 'selected' : ''}" data-index='0'><span>1111</span></li>
            <li class="${index === 1 ? 'selected' : ''}" data-index='1'><span>2222</span></li>
            </ol>
            <ol class="tabContent">
            <li class="${index === 0 ? 'active' : ''}">内容1</li>
            <li class="${index === 1 ? 'active' : ''}">内容2</li>
            </ol>
            </div>
            `
        },
        render(data){
            const index = data.index
            if (this.el.children.length !== 0){this.el.empty()}
            $(this.html(index)).appendTo(this.el)
        },
        events: {
            'click .tabBar li': 'x'
        },
        x(e) {
            const index = parseInt(e.currentTarget.dataset.index)
            m.update({index: index})
        }
    })
}

export default init