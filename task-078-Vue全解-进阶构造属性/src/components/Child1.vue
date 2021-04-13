<template>
  <div>
    Children1
    <change-theme-button />
  </div>
</template>

<script>
// import log from "../mixins/log.js";
import MyVue from "../MyVue";
import ChangeThemeButton from "./ChangeThemeButton";

export default {
  data() {
    return {
      name: "child1",
    };
  },
  components: {
    ChangeThemeButton,
  },
  // 把log.js中的data created 复制进
  // mixins: [log],

  // 使用继承
  extends: MyVue,
};
</script>
