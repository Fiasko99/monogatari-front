<template>
  <button :type="type" class="ui-kit-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonUiKit',
  props: {
    type: {
      type: String,
      default: () => 'button'
    },
  },
}
</script>

<style scoped>
.ui-kit-button {
  cursor: pointer;
  padding: 6px 12px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: bold;
  border-radius: 6px;
  border: 2px solid thistle;
  background: papayawhip;
  color: brown;
}
.ui-kit-button:hover {
  background: brown;
  color: papayawhip;
}
.ui-kit-button:active {
  background: papayawhip;
  color: brown;
}
.ui-kit-button:disabled {
  border: none;
  background: none;
  color: brown;
  cursor: default;
}
</style>