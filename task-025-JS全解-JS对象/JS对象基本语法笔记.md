### 声明对象的两种语法

    let obj = {'name': 'frank', 'age': 18}
    let obj = new Object({'name': 'frank'})

### 如何删除对象的属性

    删除属性
        delete obj.xxx delete obj['xxx']
        obj.name = undefined 删除属性值 属性名还在
        delete obj.name 删除属性名和属性值

    对象中是否含有属性名
        'name' in obj

    含有属性名 但是值为undefined
        'xxx' in obj && obj.xxx === undefined

    注意 obj.xxx === undefined
        不能断定'xxx' 是否为obj的属性

### 如何查看对象的属性

    查看属性
        查看属性名
        Object.keys(obj)
            返回数组
        查看值
        Object.values(obj)
            返回数组
        查看属性名和值
        Object.entries(obj)
            返回数组
            0: (2) ["name", "frank"]
            1: (2) ["age", 18]

    查看自身+共有属性
        console.dir(obj)
        或者 Object.keys() 打印出obj.__proto__

### 如何修改或增加对象的属性

    直接赋值
        let obj = {name: 'frank'}
        obj.name = 'frank' // name是字符串
        obj['name'] = 'frank'
        let key = 'name' obj[name] = 'frank'
        错误方式
            let key = 'name' obj.key = 'frank' wrong
            因为obj.key 等价 obj['key']

    批量赋值
        Object.assign(obj, {age: 18, gender: 'man'})

    修改和增加共有属性
    JS脆弱性
        无法通过自身修改和增加共有属性
        let obj = {}, obj2 = {}
        obj.toString = 'xxx' 只会改obj自身属性
        obj2.toString 还是在原型上

        如果一定要修改
        obj.__proto__.toString = 'xxx' 不推荐
        Object.prototype.toString = 'xxx'
        一般来说 不要修改原型 会引起很多问题
        obj.__proto__ === window.Object.prototype

    修改隐藏属性
        不推荐使用__proto__
        let obj = {name: 'frank'}
        let obj_2 = {name: 'jack'}
        let common = {kind: 'human'}
        obj.__proto__ = common
        obj_2.__proto__ = common

        推荐使用Object.create
            以common为原型创建对象
            let obj = Object.create(common)
            obj.name = 'frank'
            let obj_2 = Object.create(common)
            obj.name = 'jack'
            规范大概的意思是 要改一开始就改 不要后来再改

### 'name' in obj 和 obj.hasOwnProperty('name') 的区别

    前者判断属性是否在对象中 判断的范围包含自由属性和共有属性
    后者判断属性是否是对象的自有属性
