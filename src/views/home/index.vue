<template>
  <MapContent>
    <template #localities="slotProps">
      <ListTerritory :localities="slotProps.localities" />
    </template>
  </MapContent>
</template>

<script>
// @components
import MapContent from "@/components/map-content";
import ListTerritory from "@/components/list-territory";

export default {
  name: 'HomeView',
  components: {
    MapContent,
    ListTerritory,
  },
}
</script>