<template>
  <div class="location">
    <Heading h="h1">{{ location.name }}</Heading>
    <Posts :posts="location.posts" />
  </div>
</template>

<script>
import Fetcher from '@/Fetcher';
import Heading from '@/ui-kit/Heading.vue';
import Posts from '@/components/posts';

export default {
  name: 'LocationView',
  data() {
    return {
      location: {
        name: '',
        posts: [],
      },
    }
  },
  components: {
    Posts,
    Heading,
},
  async mounted() {
    this.location = await Fetcher.get(`/location/${this.$route.params.name}`);
  },
}
</script>

<style scoped>

</style>