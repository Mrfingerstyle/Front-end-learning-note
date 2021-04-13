<template>
  <div>Children3</div>
</template>

<script>
import log from "../mixins/log.js";

export default {
  // data会合并 created也合并了 智能合并
  data() {
    return {
      name: "child3",
    };
  },
  // 把log.js中的data created 复制进
  mixins: [log],
};
</script>
