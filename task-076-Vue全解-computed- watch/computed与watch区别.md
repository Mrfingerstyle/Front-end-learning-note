### computed

    计算属性

```javascript
computed: {
    displayUsers(){
      const hash = {
        male: 'man',
        female: 'woman'
      }
      const {user, gender} = this
      if (gender === '') {
        return user
      } else if (typeof gender === 'string') {
        console.log(user);
        return user.filter(u => u.gender === hash[gender])
      } else {
        throw new Error('gender的值是意外的值')
      }
    }
  },
```

    computed看上去是方法，但是实际上是计算属性，它会根据你所依赖的数据动态显示新的计算结果。计算结果会被缓存，computed的值在getter执行后是会缓存的，只有在它依赖的属性值改变之后，下一次获取computed的值时才会重新调用对应的getter来计算

    适用于重新计算比较费时不用重复数据计算的环境。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。如果一个数据依赖于其他数据，那么把这个数据设计为computed

### watch

    监听/侦听

```javascript
watch: {
    n: function(){
      console.log('n变了');
    },
    obj:{
      handler() {
        console.log('obj变了');
      },
      // 默认是false 只看表层的地址
      deep: true
    },
    "obj.a":function(){
      console.log('obj.a变了 ');
    },
    "obj.b":function(){
      console.log('obj.b变了 ');
    }
  }
```

    watcher 更像是一个 data 的数据监听回调，当依赖的 data 的数据变化，执行回调，在方法中会传入 newVal 和 oldVal。可以提供输入值无效，提供中间值 特场景。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。如果你需要在某个数据变化时做一些事情，使用watch。

### 总结

    如果一个数据依赖于其他数据 可以把这个数据设计为computed
    如果你需要在某个数据变化后做一些事情 使用watch来观察这个数据变化
