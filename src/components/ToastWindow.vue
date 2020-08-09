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
import { mapState } from "vuex";

export default {
  name: "ToastWindow",
  components: {
    ToastMessage,
  },
  computed: mapState(["toasts"]),
  methods: {
    removeToast(index) {
      this.$store.dispatch("endToast", index);
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
