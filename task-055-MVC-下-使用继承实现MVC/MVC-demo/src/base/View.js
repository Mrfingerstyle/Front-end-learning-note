import $ from 'jquery'
import EventBus from './EventBus'

class View extends EventBus{
    // constructor({el, html, render, data, eventBus, events}) {
    constructor(options) {
        super()
        // options有什么 都放在this上面
        // console.log(options);
        Object.assign(this, options)
        this.el = $(this.el)
        // console.log(this.render);
        this.render(this.data)
        this.autoBindEvents()
        this.on('m_updated', ()=> {
            this.render(this.data)
        })
    }
    autoBindEvents() {
        for (let key in this.events) {
            const value = this[this.events[key]]
            const spaceIndex = key.indexOf(' ')
            const part_1 = key.slice(0, spaceIndex)
            const part_2 = key.slice(spaceIndex + 1)
            this.el.on(part_1, part_2, value)
        }
    }

}

export default View