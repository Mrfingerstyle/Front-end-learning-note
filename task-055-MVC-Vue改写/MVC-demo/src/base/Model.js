import EventBus from "./EventBus";

class Model extends EventBus {
    // EventBus.constructor()
    constructor(options) {
        super()
        const keys = ['data', 'create', 'update', 'delete', 'get']
        keys.forEach((key)=>{
            if (key in options) {
                this[key] = options[key]
            }
        })
    }
    create(){
        if (console && console.error) {
            console.error('未实现create');
        }
        // 可选链语法
        // console?.error?.('未实现create')
        // or 
        // console && console.error && console.error('未实现create')
    }
    delete(){
        if (console && console.error) {
            console.error('未实现delete');
        }
    }
    update(){
        if (console && console.error) {
            console.error('未实现update');
        }
    }
    get(){
        if (console && console.error) {
            console.error('未实现get');
        }
    }
}

export default Model


