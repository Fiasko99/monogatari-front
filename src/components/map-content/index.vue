<template>
  <div class="states">
    <Heading h="h3">Карта в виде списка</Heading>
    <div
      v-if="states.length > 0" 
      v-for="state in states" 
      :key="state.name"
      class="state">
      <Heading h="h3">{{ state.name }}</Heading>
      <Hr />
      <slot name="localities" :localities="state.localities"></slot>
    </div>
  </div>
</template>

<script>
// @services
import Fetcher from '@/Fetcher';

// @ui-kit
import Heading from "@/ui-kit/Heading.vue";
import Hr from "@/ui-kit/Hr.vue";

export default {
  name: 'MapContentComponent',
  data() {
    return {
      states: [],
    }
  },
  components: {
    Heading,
    Hr,
  },
  async mounted() {
    this.states = await Fetcher.get('/state/all')
  },
}
</script>

<style scoped>
.states {
  border-radius: 12px;
  padding: 6px 12px;
  background: papayawhip;
}
.state {
  border-radius: 6px 16px;
  background: wheat;
  margin: 12px auto;
  padding: 6px 12px;
}
</style>