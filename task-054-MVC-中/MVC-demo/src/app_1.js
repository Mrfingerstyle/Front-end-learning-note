import './app_1.css'
import $ from 'jquery'
// console.log($);

const eventBus = $(window)
// console.log(eventBus.on);
// console.log(eventBus.trigger);

// 数据相关都放到M
const m = {
    data: {
        n : parseInt(localStorage.getItem('n'))
    },
    create(){},
    delete(){},
    update(data){
        Object.assign(m.data, data)
        eventBus.trigger('m_updated')
        localStorage.setItem('n', m.data.n)
    },
    get(){}
}
// 视图相关都放到V
const v = {
    el: null,
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
    init(container) {
        v.el = $(container)
    },
    render(n){
        if (v.el.children.length !== 0) v.el.empty()
        $(v.html.replace('{{n}}', n))
            .appendTo(v.el)
    }
}
// 其他的都放到C
const c = {
    init(container) {
        v.init(container)
        v.render(m.data.n)
        c.autoBindEvents()
        eventBus.on('m_updated', ()=> {
            v.render(m.data.n)
        })
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

    autoBindEvents() {
        for (let key in c.events) {
            const value = c[c.events[key]]
            // console.log(value);
            const spaceIndex = key.indexOf(' ')
            const part_1 = key.slice(0, spaceIndex)
            const part_2 = key.slice(spaceIndex + 1)
            // console.log(part_1);
            // console.log(part_2);
            // console.log(part_1, part_2, value)
            v.el.on(part_1, part_2, value)

        }
    }
}

export default c