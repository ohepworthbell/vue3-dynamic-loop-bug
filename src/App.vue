<template>
  <div id="app">
    <ToastWindow :toasts="toasts" @remove-toast="removeToast" />
  </div>
</template>

<script>
import ToastWindow from "./components/ToastWindow.vue";

export default {
  name: "App",
  components: {
    ToastWindow,
  },
  data() {
    return {
      toasts: [
        {
          content: "This is a toast...",
        },
        {
          content: "Toast with timeout",
        },
        {
          content: "Another toast...",
        },
        {
          content: "And yet another",
        },
      ],
    };
  },
  methods: {
    removeToast(index) {
      this.toasts.splice(index, 1);
    },
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
