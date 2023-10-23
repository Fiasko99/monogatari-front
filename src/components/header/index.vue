<template>
  <header class="header">
    <div class="left">
      <slot name="navbar"></slot>
    </div>
    <div class="right">
      <slot name="show-map-btn"></slot>
      <slot name="user-menu"></slot>
    </div>
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
.left {
  width: 50%;
}
.right {
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}
</style>