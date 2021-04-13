<template>
  <div>Children2</div>
</template>

<script>
// import log from "../mixins/log.js";
import { MyVue } from "../MyVue";

export default {
  // data会合并 created也合并了 智能合并
  data() {
    return {
      name: "child2",
    };
  },
  // 把log.js中的data created 复制进
  // mixins: [log],
  extends: MyVue,
};
</script>
