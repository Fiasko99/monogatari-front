<template>
  <div class="posts">
    <div
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :ref="`post#${post.id}`"
      class="post">
        <div class="left">
          <Heading h="h3">
            <Link :to="`/user/${post.characterName}`">{{ post.characterName }}</Link>
          </Heading>
          <div class="avatar">
            <img src="http://localhost:3210/cdn/assets/avatar.svg" alt="avatar" />
          </div>
        </div>
        <div class="right">
          <div class="post-heading">
            <Button 
              title="Скопировать" 
              @click="copyLinkToPost(post.id)">Пост#{{ post.id }}</Button>
            <span class="time">{{
              new Date(post.createdAt).toLocaleString()  
            }}</span>
          </div>
          <hr>
          <p class="text">{{ post.text }}</p>
        </div>
    </div>
  </div>
</template>

<script>
// @ui-kit
import Heading from '@/ui-kit/Heading.vue';
import Button from '@/ui-kit/Button.vue';
import Link from '@/ui-kit/Link.vue';

export default {
  name: 'PostsComponent',
  props: {
    posts: {
      type: Array,
      required: true,
      default: () => [],
    }
  },
  components: {
    Heading,
    Button,
    Link,
  },
  methods: {
    copyLinkToPost(postId) {
      const domen = window.location.origin;
      const linkToPost = `${domen}/location/${this.$route.params.name}/#${postId}`
      navigator.clipboard.writeText(linkToPost)
    },
    scrollToPost() {
      const hash = this.$route.hash
      if (hash) {
        const postElem = this.$refs[`post${hash}`][0];
        postElem.scrollIntoView();
      }
    },
  },
  updated() {
    this.scrollToPost();
  },
}
</script>

<style scoped>
.post {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
  padding: 12px;
  background: wheat;
  border-radius: 6px;
  border: 2px solid thistle;
  margin: 12px 0;
}
.left {
  width: 20%;
  min-width: 156px;
  text-align: center;
}
.right {
  width: 100%;
}
.post-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text, .time {
  color: brown;
}
.avatar {
  width: 100%;
}
</style>