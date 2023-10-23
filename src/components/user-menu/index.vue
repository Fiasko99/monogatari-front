<template>
  <div v-if="signStatus" class="user-modal">
    <Button
      @click="showModal = !showModal"
      class="user-menu-btn">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </Button>
    <Modal 
      :show="showModal" 
      typeAnimate="slide" 
      class="modal">
      <Link to="/user/me" class="user-links">Профиль</Link>
      <Link to="/user/me/characters" class="user-links">Персонажи</Link>
      <Link to="/user/me/settings" class="user-links">Настройки</Link>
      <Link to="#" class="user-links">Выйти</Link>
    </Modal>
  </div>
  <div v-else class="sign-modal">
    <Button @click="showModal = !showModal">Войти</Button>
    <Modal 
      :show="showModal" 
      typeAnimate="slide" 
      class="modal">
      <Link to="/auth" class="user-links">Авторизация</Link>
    </Modal>
  </div>
</template>

<script>
// @ui-kit
import Button from "@/ui-kit/Button.vue";
import Modal from "@/ui-kit/Modal.vue";
import Link from "@/ui-kit/Link.vue";

export default {
  name: 'UserMenuComponent',
  components: {
    Button,
    Modal,
    Link,
  },
  data() {
    return {
      showModal: false,
    }
  },
  computed: {
    signStatus() {
      return this.$store.getters.signStatus;
    }
  },
}
</script>

<style scoped>
.user-modal, .sign-modal {
  position: relative;
}
.user-menu-btn {
  padding: 4px 6px;
}
.line {
  border: 1px solid brown;
  width: 20px;
  margin: 4px auto;
}
.user-menu-btn:hover > .line {
  border-color: wheat;
}
.user-menu-btn:active > .line {
  border-color: brown;
}
.modal {
  top: 40px;
  right: -6px;
  border-bottom: 2px solid thistle;
  border-left: 2px solid thistle;
  border-bottom-left-radius: 6px;
}
.user-links {
  display: block;
  border-top: 2px solid thistle;
  padding: 2px 0;
}
.user-links:first-child {
  border-top: none;
}
</style>