<template>
  <div
    v-if="Object.keys(user).length > 0" 
    class="user">
    <div class="user-info">
      <div class="info">
        <Heading h="h3">{{ user.login }} ({{ user.email }})</Heading>
        <Heading h="h6">Создан: {{
          new Date(user.createdAt).toLocaleString()  
        }}</Heading>
      </div>
    </div>
    <div class="profile-bar">
      <div class="links">
        <Link :to="`/user/${userLogin}`">Профиль</Link>
        <Link :to="`/user/${userLogin}/characters`">Персонажи</Link>
        <Link :to="`/user/${userLogin}/settings`">Настройки</Link>
      </div>
      <Hr />
    </div>
    <div class="child-frame">
      <router-view :user="user" @updateData="updateData" />
    </div>
  </div>
</template>

<script>
import Fetcher from "@/Fetcher";

import Hr from "@/ui-kit/Hr.vue";
import Heading from "@/ui-kit/Heading.vue";
import Link from "@/ui-kit/Link.vue";
import Button from "@/ui-kit/Button.vue";

export default {
  name: 'UserView',
  data() {
    return {
      user: {},
    }
  },
  components: {
    Link,
    Hr,
    Heading,
    Button,
  },
  computed: {
    userLogin() {
      return this.$route.params.login
    }
  },
  methods: {
    async updateData() {
      this.user = await Fetcher.get(`/user/${this.userLogin}`);
    },
  },
  async mounted() {
    await this.updateData();
  },
}
</script>

<style scoped>
.user-info {
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: baseline;
}
.profile-bar {
  margin: 12px 0;
}
.links {
  display: flex;
  gap: 8px;
  margin: 6px 0;
}
</style>