<template>
  <label :for="forId">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'LabelUiKit',
  props: {
    forId: String,
  }
}
</script>

<style scoped>

</style>