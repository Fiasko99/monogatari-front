<template>
  <div class="characters">
    <div 
      v-for="character in characters" 
      :key="character.name" 
      :class="[
        'character', 
        {'active': character.active}
      ]">
      <div class="heading">
        <Heading h="h3">{{ character.name }}</Heading>
        <Button @click="editCharacter">Редактировать</Button>
      </div>
      <div class="img">
        <img :src="`${serverLink}/assets/avatar.svg`" alt="avatar">
      </div>
      <div class="manage-btns">
        <Button 
          @click="activate(character.name)" :disabled="character.active">
          {{ character.active ? 'Активировано' : 'Активировать' }}
        </Button>
        <Button>Подробнее</Button>
      </div>
      <Heading h="h6" class="time">Создан: {{
        new Date(character.createdAt).toLocaleString()  
      }}</Heading>
    </div>
  </div>
</template>

<script>
// @ui-kit
import Heading from "@/ui-kit/Heading.vue";
import Button from "@/ui-kit/Button.vue";

import Fetcher from "@/Fetcher";

export default {
  name: 'CharactersView',
  components: {
    Heading,
    Button,
  },
  data() {
    return {
      characters: [],
    }
  },
  computed: {
    serverLink() {
      return process.env.VUE_APP_CDN_URL;
    },
  },
  methods: {
    async updateData() {
      const { login } = this.$route.params;
      this.characters = await Fetcher.get(`/character/all/${login}`);
    },
    async activate(name) {
      this.characters = await Fetcher.get(`/character/activate/${name}`);
    },
    editCharacter() {
      console.log('edit character');
    },
  },
  async mounted() {
    this.updateData();
  }
}
</script>

<style scoped>
.characters {
  display: flex;
  justify-content: space-evenly;
  gap: 8px;
  flex-wrap: wrap;
  margin: 12px 0;
}
.character {
  box-sizing: border-box;
  text-align: center;
  min-width: 192px;
  width: calc(50% - 8px);
  max-width: 320px;
  background: papayawhip;
  border-radius: 12px;
  padding: 6px;
  border: 2px solid thistle;
}
.heading {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.time {
  text-align: right;
}
.active {
  border: 2px solid brown;
}
.manage-btns {
  display: flex;
  gap: 8px;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>