<template>
  <div id="app">
    <ToastWindow />
  </div>
</template>

<script>
import ToastWindow from "./components/ToastWindow.vue";

export default {
  name: "App",
  components: {
    ToastWindow,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
