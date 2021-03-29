import './app_1.css'
import $ from 'jquery'
// console.log($);
import Model from './base/Model'
import View from './base/View'
import EventBus from './base/EventBus'

// const eventBus = new EventBus()

// console.log(eventBus.on);
// console.log(eventBus.trigger);

// 数据相关都放到M
const m = new Model({
    data: {
        n: parseFloat(localStorage.getItem('n'))
    },
    update: function (data) {
        Object.assign(m.data, data)
        m.trigger('m_updated')
        localStorage.setItem('n', m.data.n)
    }
})


// 视图相关都放到V

// 其他的都放到C
const init = (el)=> {
    new View({
        el: el,
        data: m.data,
        // eventBus: eventBus,
        html: `
        <!-- 有数据存储功能的计算器 -->
        <div>
            <div class="output">
                <span id="number">{{n}}</span>
            </div>
            <div class="actions">
                <button id="add_1">+1</button>
                <button id="minus_1">-1</button>
                <button id="mul_1">*2</button>
                <button id="divide_1">/2</button>
            </div>
        </div>
        `,
        render(data){
            const n = data.n
            if (this.el.children.length !== 0) this.el.empty()
            $(this.html.replace('{{n}}', n))
                .appendTo(this.el)
        },
        events: {
            'click #add_1': 'add',
            'click #minus_1': 'minus',
            'click #mul_1': 'mul',
            'click #divide_1': 'divide'
        },
        add() {
            m.update({n: m.data.n + 1})
        },
        minus() {
            m.update({n: m.data.n - 1})
        },
        mul() {
            m.update({n: m.data.n * 2})
        },
        divide() {
            m.update({n: m.data.n / 2})
        },
    })
}

export default init