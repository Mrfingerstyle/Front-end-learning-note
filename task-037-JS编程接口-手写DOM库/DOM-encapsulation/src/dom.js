window.dom = {
    // 创建节点
    create(string) {
        // bug div内不能放<td></td>
        // 问题 有什么标签能够容纳所有元素不出错 template
        // td不能单独存在
        const container = document.createElement('template')
        // trim() 去除空格
        container.innerHTML = string.trim()
        return container.content.firstChild
        // return container
    },
    // 新增弟弟
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling)
    },
    before(node, node2) {
        node.parentNode.insertBefore(node2, node)
    },
    append(parent, node) {
        parent.appendChild(node)
    },
    wrap(node, parent) {
        dom.before(node, parent)
        dom.append(parent, node)
    },
    // 删除
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    empty(node) {
        const array = []
        let x = node.firstChild
        while(x){
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array
    },
    // 改 
    // 改div的title 读写title属性
    attr(node, name, value) {
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        }else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },
    // 读写文本内容
    text(node, string) {
        // node.innerText = string // ie
        // node.textContent = string // firefox chrome
        // 适配
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string
            } else {
                node.textContent = string
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }
    },
    // 读写html内容
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    // 修改style参数
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name]
            } else if (name instanceof Object) {
                const obj = name 
                for (let key in obj) {
                    node.style[key] = obj[key]
                }
            }
        }
    },
    // 添加class
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    // 查询
    // 根据选择器返回对应的元素
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)[0]
    },
    // 获取父元素
    parent(node) {
        return node.parentNode
    },
    // 获取子元素
    children(node) {
        return node.children
    },
    // 找到兄弟姐妹
    siblings(node) {
        // 伪数组转为数组 然后过滤
        return Array.from(node.parentNode.children).filter(n => n !== node)
    },
    // 找到元素的弟弟
    next(node) {
        let x = node.nextSibling
        // 剔除文本节点
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x 
    },
    // 获取哥哥
    previous(node) {
        let x = node.previousSibling
        // 剔除文本节点
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x 
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])            
        }
    },
    // 获取排行
    index(node) {
        let list = dom.children(node.parentNode)
        let i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    }

}