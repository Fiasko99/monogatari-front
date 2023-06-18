<template>
  <div class="home">
    <MapInteractive v-if="showInteractiveMap"></MapInteractive>
    <hr v-if="showInteractiveMap">
    <MapContent>
      <template #localities="slotProps">
        <ListTerritory :localities="slotProps.localities" />
      </template>
    </MapContent>
  </div>
</template>

<script>
import MapContent from "@/components/map-content";
import MapInteractive from "@/components/interactive-map";
import ListTerritory from "@/components/list-territory";

export default {
  name: 'HomeView',
  components: {
    MapContent,
    MapInteractive,
    ListTerritory,
  },
  computed: {
    showInteractiveMap() {
      return this.$store.getters.showInteractiveMap
    }
  },
}
</script>