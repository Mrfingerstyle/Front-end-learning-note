<template>
<div class="red">
    这是demo内部
    {{message}}
    <button @click="fn">call fn</button>
</div>
</template>

<script>
    export default {
        //     data() {
        //     return {
        //       n: 0,
        //       array: [1, 2, 3, 4, 5, 6, 7, 8],
        //     }
        //   },
        //   methods: {
        //     add() {
        //       this.n += 1;
        //     },
        //     // filter(array) {
        //     //   return array.filter(i => i % 2 === 0)
        //     // }
        //     filter() {
        //       // console.log('run filter');
        //       return this.array.filter(i => i % 2 === 0)
        //     }
        //   },
        //   created () {
        //     console.log('出现在内存中,没有出现在页面中');
        //   },
        //   mounted () {
        //     console.log('出现在页面中');
        //   },
        //   updated () {
        //     // 
        //     console.log('更新了');
        //     console.log(this.n);
        //   },
        //   destroyed () {
        //       console.log('在页面中消失');
        //   }
        props: ['message', 'fn']
    }
</script>

<style>
.red {
    color: red;
    border: 1px solid red;
}
</style>