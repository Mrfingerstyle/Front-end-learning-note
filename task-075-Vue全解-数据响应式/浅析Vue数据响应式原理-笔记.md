### Vue响应式原理
	
	options.data 
	会被Vue监听
	会被Vue实例代理
	每次对data的读写都会被Vue监控


### Vue 对 data 做了什么

    Vue 给传入的对象添加属性 value
    通过setter getter实现对属性的读写进行监控
    Vue 通过代理模式对传入的data对象的读写 全权由另一个对象vm负责
    vm作为data的代理 操作data中的属性

### Vue 的 data 存在 bug

    例如 在传入的data对象中 只给出obj.a
    但是在模版中却使用了obj.b Vue不会报错
    因为只检查对象的第一层 这会导致数据因为data中没有对应的 key 而拿不到

### 如何解决这个 bug

    对象中新增的key
    Vue没法事先监听和代理
    要使用set新增key 创建监听和代理 更新UI
    最好把属性都写出来
    Vue.set(this.obj, 'b', 1)
    this.$set(this.obj, 'b', 1)

    数组中新增的key
    可以使用set新增key 更新UI
    不过Vue改动了原生的数组方法 方便用户对数组进行增删
    这7个API自动处理监听和代理 并更新UI
    数组新增最好使用这7个API
    this.array.push('d')
