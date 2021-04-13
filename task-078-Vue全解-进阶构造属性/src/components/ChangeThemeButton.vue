<template>
  <div>
    <button @click="z">当前主题色 {{ themeName }} 换肤</button>
    <button @click="changeFontSize('big')">大字</button>
    <button @click="changeFontSize('normal')">正常字</button>
    <button @click="changeFontSize('small')">小字</button>
  </div>
</template>

<script>
export default {
  inject: ["themeName", "fontSize", "changeTheme", "changeFontSize"],
  methods: {
    z() {
      this.changeTheme();
    },
  },
};
</script>
<style>
button {
  margin-right: 10px;
}
</style>
