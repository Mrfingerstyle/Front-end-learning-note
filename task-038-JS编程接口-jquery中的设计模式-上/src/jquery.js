window.jQuery = function(selectorOrArray) {
    // 此处的const不能改变
    let elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }
    
    // console.log(elements);
    // API可以操作elements
    // 下面的代码也是闭包 函数访问外部的变量
    return {
        find(selector_x) {
            let array = []
            for (let i = 0; i < elements.length; i++) {
                array = array.concat(Array.from(elements[i].querySelectorAll(selector_x)))
            }
            // const newApi = jQuery(array)
            // return newApi

            array.oldApi = this // 此处的this就是 旧 API
            return jQuery(array)
        },
        each(fn) {
            for (let i = 0; i < elements.length; i++) {
                fn.call(null, elements[i], i)
            }
            return this // this 就是API对象
        },
        parent() {
            const array = []
            this.each((node) => {
                if (array.indexOf(node.parentNode) === -1) {
                    array.push(node.parentNode)
                }
            })
            return jQuery(array)
        },
        children() {
            const array = []
            this.each((node) => {
                if (array.indexOf(node.parentNode) === -1) {
                    // 展开操作符 把数组展开
                    array.push(...node.children)
                }
            })
            return jQuery(array)
        },
        print() {
            console.log(elements);
        },
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
            // 此处返回API 为了链式操作
            // 也可以调用this 调用的是api.addClass
            return this
        },
        end() {
            return this.oldApi // this 就是 新 的API
        },
        oldApi: selectorOrArray.oldApi,
    }
    // 也可以在上面直接返回对象
    // return api
};

window.$ = window.jQuery



