<template>
    <div class="app">
        现在有{{total}}
        <hr>
        <!-- <child :money="total" v-on:update:money="total=$event"/> -->
        <!-- 等价 -->
        <Child :money.sync="total"/>
    </div>
</template>

<script>
import Child from './sync-demo-child.vue'
export default {
    data () {
        return {
            total: 10000
        }
    },
    components: {
        Child
    }
}
</script>

<style>
.app{
    border: 3px solid red;
    width: 500px;
    height: 500px;
    font-size: 50px;
}
</style>