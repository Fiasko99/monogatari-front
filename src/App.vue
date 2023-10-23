<template>
  <Header>
    <template #navbar>
      <Navbar />
    </template>
    <template #show-map-btn>
      <Button @click="$store.commit('turnShowInteractiveMap')">Карта</Button>
    </template>
    <template #user-menu>
      <UserMenu></UserMenu>
    </template>
  </Header>
  <div class="app-main">
    <MapInteractive v-if="showInteractiveMap"></MapInteractive>
    <router-view/>
  </div>
</template>

<script>
// @ui-kit
import Button from "@/ui-kit/Button.vue";

// @components
import MapInteractive from "@/components/interactive-map";
import UserMenu from "@/components/user-menu";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

export default {
  components: {
    MapInteractive,
    UserMenu,
    Header,
    Navbar,
    Button,
},
  computed: {
    showInteractiveMap() {
      return this.$store.getters.showInteractiveMap;
    }
  },
  async mounted() {
    const token = localStorage.getItem(process.env.VUE_APP_TOKEN_NAME);
    if (token) {
      this.$store.commit('changeSignStatus', true)
    }
  }
}
</script>

<style>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
body {
  margin: 0;
  padding: 0; 
  background: lightcyan; 
}
.app-main {
  margin: 12px 0;
}
@media screen and (max-width: 640px) {
  .app-main {
    margin: 12px 0;
  }
}
@media screen and (min-width: 641px) and (max-width: 1440px) {
  .app-main {
    margin: 12px 5%;
  }
}
@media screen and (min-width: 1441px) and (max-width: 2560px) {
  .app-main {
    margin: 12px 10%;
  }
}
@media screen and (min-width: 2561px) {
  .app-main {
    margin: 12px 15%;
  }
}
</style>
