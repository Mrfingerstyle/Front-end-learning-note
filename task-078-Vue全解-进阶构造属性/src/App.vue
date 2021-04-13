<template>
  <div id="app" :class="`theme-${themeName} fontSize-${fontSizeName}`">
    <!-- 使用v-x -->

    <Child1 v-if="Child1Visiable1" />
    <button @click="Child1Visiable1 = false">x</button>
    <Child2 v-if="Child1Visiable2" />
    <button @click="Child1Visiable2 = false">x</button>
    <Child3 v-if="Child1Visiable3" />
    <button @click="Child1Visiable3 = false">x</button>
    <Child4 v-if="Child1Visiable4" />
    <button @click="Child1Visiable4 = false">x</button>
    <Child5 v-if="Child1Visiable5" />
    <button @click="Child1Visiable5 = false">x</button>
  </div>
</template>

<script>
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Child3 from "./components/Child3";
import Child4 from "./components/Child4";
import Child5 from "./components/Child5";

export default {
  provide() {
    return {
      themeName: this.themeName,
      fontSize: this.fontSize,
      changeTheme: this.changeTheme,
      changeFontSize: this.changeFontSize,
    };
  },
  methods: {
    changeTheme() {
      if (this.themeName === "blue") {
        this.themeName = "red";
      } else {
        this.themeName = "blue";
      }
    },
    changeFontSize(size) {
      if (["normal", "big", "small"].indexOf(size) === -1) {
        throw new Error(`wront size: ${size}`);
      }
      this.fontSizeName = size;
    },
  },
  data() {
    return {
      themeName: "blue",
      fontSizeName: "normal",
      Child1Visiable1: true,
      Child1Visiable2: true,
      Child1Visiable3: true,
      Child1Visiable4: true,
      Child1Visiable5: true,
    };
  },
  name: "App",
  components: {
    Child1,
    Child2,
    Child3,
    Child4,
    Child5,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  margin-bottom: 20px;
}
#app.theme-blue {
  color: darkblue;
}
#app.theme-blue button {
  border: 1px solid #000;
  background: blue;
  color: white;
}
#app.theme-red {
  color: red;
}
#app.theme-red button {
  border: 1px solid #000;
  background: red;
  color: white;
}
#app.fontSize-normal {
  font-size: 20px;
}
#app button {
  font-size: inherit;
}
#app.fontSize-small {
  font-size: 16px;
}
#app.fontSize-big {
  font-size: 25px;
}
</style>
