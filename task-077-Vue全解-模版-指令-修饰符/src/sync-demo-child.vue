<template>
    <div class="child">
    {{money}}
    <button @click="$emit('update:money', money-100)">
        <span>花钱</span>
    </button>
    </div>
</template>

<script>
export default {
    props: ['money']
}
</script>

<style>
.child {
    border: 2px solid blue;
    width: 200px;
    height: 200px;
    font-size: 50px;
}
.child button {
    width: 100px;
    height: 100px;
}
</style>