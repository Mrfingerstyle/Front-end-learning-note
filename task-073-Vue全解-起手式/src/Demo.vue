// 这叫做Vue单文件组件

<template>
  <div class="red">
    {{ n }}
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 0,
    };
  },
  methods: {
    add() {
      this.n += 1;
    },
  },
};
</script>

<style>
.red {
  color: red;
}
</style>
