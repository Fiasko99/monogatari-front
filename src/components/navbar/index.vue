<template>
  <nav class="navbar">
    <Link to="/">Главная</Link>
    <Link to="/location/active">Активные локации</Link>
  </nav>
</template>

<script>
// @ui-kit
import Link from "@/ui-kit/Link.vue";

export default {
  name: 'NavbarComponent',
  components: {
    Link
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 0.5em;
  flex-wrap: nowrap;
}
</style>
