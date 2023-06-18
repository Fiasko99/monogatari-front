<template>
  <header class="header">
    <slot name="navbar"></slot>
    <slot name="show-map-btn"></slot>
    <slot name="user-menu"></slot>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
.header {
  height: 48px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: papayawhip;
  padding: 6px;
  border-bottom: 2px solid thistle;
}
</style>