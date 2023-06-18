<template>
  <router-link class="link" :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'ButtonUiKit',
  props: {
    to: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
.link {
  text-decoration: none;
  font-weight: bold;
  color: cornflowerblue;
}
</style>