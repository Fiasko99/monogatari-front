<template>
  <div class="location">
    <Heading h="h1">{{ location.name }}</Heading>
    <Posts :posts="location.posts" />
  </div>
</template>

<script>
// @ui-kit
import Heading from '@/ui-kit/Heading.vue';

// @components
import Posts from '@/components/posts';

// @services
import Fetcher from '@/Fetcher';

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