<template>
  <div
    v-if="localities.length > 0">
    <div class="group-items">
      <Button
        v-for="locality in localities"
        :key="locality.name" 
        @click="selectLocations(locality)">
        {{ `${locality.name} [${locality.locations.length}]` }}
      </Button>
    </div>
    <div
      v-if="selectedLocations.length > 0"
      class="group-items">
      <Link 
        v-for="location in selectedLocations" 
        :to="`/location/${location.name}`"
        class="location-link">
        {{ location.name }}
      </Link> 
    </div>
  </div>
  <div v-else class="group-items">Локаций еще не создано</div>
</template>

<script>
// @ui-kit
import Button from "@/ui-kit/Button.vue";
import Link from "@/ui-kit/Link.vue";

export default {
  name: 'LocalitiesComponent',
  data() {
    return {
      selectedLocations: [],
      selectedLocalityName: ''
    }
  },
  props: {
    localities: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    selectLocations({name, locations}) {
      if (this.selectedLocalityName === name) {
        this.selectedLocations = [];
        this.selectedLocalityName = '';
        return
      } 
      this.selectedLocations = locations;
      this.selectedLocalityName = name;
    }
  },  
  components: {
    Button,
    Link,
  },
}
</script>

<style scoped>
.group-items {
  padding: 6px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px 0.5em;
}
</style>