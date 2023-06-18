<template>
  <component 
    :is="h" 
    class="heading">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'HeadingUiKit',
  props: {
    h: {
      type: String,
      required: true
    },
  },
}
</script>

<style scoped>
.heading {
  color: brown;
  margin: 6px 0;
}
</style>