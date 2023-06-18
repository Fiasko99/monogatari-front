<template>
  <div class="map">
    <Heading h="h1">Интерактивная карта</Heading>
  </div>
</template>

<script>
import Heading from '@/ui-kit/Heading.vue';

export default {
    name: "MapComponent",
    data() {
        return {};
    },
    async mounted() {
    },
    components: {
      Heading,
    }
}
</script>

<style scoped>
  .map {
    text-align: center;
  }
</style>