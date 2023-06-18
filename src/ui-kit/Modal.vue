<template>
  <transition :name="`${typeAnimate}-fade`">
    <div v-if="show" class="ui-kit-modal">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalUiKit',
  props: {
    show: {
      type: Boolean,
      default: () => false,
    },
    typeAnimate: {
      type: String,
      default: () => 'hide',
    },
  },
}
</script>

<style scoped>
.ui-kit-modal {
  position: absolute;
  padding: 12px;
  background: papayawhip;
}
.slide-fade-enter-active {
  transition: all 0.8s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
.hide-fade-enter-active {
  transition: all 0.8s ease-in-out;
}

.hide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.hide-fade-enter-from, .hide-fade-leave-to {
  opacity: 0;
}
</style>