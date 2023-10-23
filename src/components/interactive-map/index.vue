<template>
  <div class="map">
    <Heading h="h2">Интерактивная карта</Heading>
    <Hr />
  </div>
</template>

<script>
// @ui-kit
import Heading from '@/ui-kit/Heading.vue';
import Hr from "@/ui-kit/Hr.vue";

export default {
    name: "MapComponent",
    data() {
        return {};
    },
    async mounted() {
    },
    components: {
      Heading,
      Hr,
    }
}
</script>

<style scoped>
  .map {
    text-align: center;
    margin: 12px auto;
  }
</style>