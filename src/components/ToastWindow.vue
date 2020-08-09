<template>
  <div class="toast__window">
    <ToastMessage
      v-for="(toast, i) of toasts"
      :key="i"
      @remove-toast="removeToast(i)"
    >{{ toast.content }}</ToastMessage>
  </div>
</template>

<script>
import ToastMessage from "./ToastMessage.vue";

export default {
  name: "ToastWindow",
  components: {
    ToastMessage,
  },
  props: ["toasts"],
  methods: {
    removeToast(index) {
      this.$emit("remove-toast", index);
    },
  },
};
</script>

<style lang="scss">
.toast__window {
  position: fixed;
  bottom: 1.5em;
  right: 1.5em;
  pointer-events: none;
}
</style>
