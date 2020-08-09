<template>
  <div class="toast" :class="{'toast--hiding': transitioning}" @click="transitionOut">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ToastMessage",
  data() {
    return {
      transitioning: false,
      closed: false,
    };
  },
  methods: {
    transitionOut() {
      this.transitioning = true;

      setTimeout(() => {
        this.$emit("remove-toast");
      }, 500);
    },
  },
};
</script>

<style lang="scss">
.toast {
  position: relative;
  display: block;
  max-width: 25rem;
  float: right;
  clear: both;
  padding: 1.2rem 1.5rem;
  background: #70797c;
  color: #fff;
  text-align: center;
  pointer-events: auto;
  margin: 0.4em 0 0;
  cursor: pointer;

  &--hiding {
    opacity: 0;
    animation: hide_toast 0.15s ease-out;
    position: absolute;
    bottom: 0;
    pointer-events: none;
  }
}

@keyframes hide_toast {
  0% {
    opacity: 1;
    transform: none;
    position: static;
  }

  100% {
    opacity: 0;
    transform: scale(0.8);
    position: static;
  }
}
</style>
