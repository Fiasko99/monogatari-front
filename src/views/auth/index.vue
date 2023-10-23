<template>
  <div class="select-btns">
    <Button @click="selectForm('up')" class="select-btn">Регистрация</Button>
    <Button @click="selectForm('in')" class="select-btn">Вход</Button>
  </div>
  <form @submit.prevent="auth" class="auth">
    <div v-if="typeForm === 'in'" class="app-form">
      <Heading h="h3" class="title">Вход</Heading>
      <FieldInput class="field-input" fieldId="login" v-model="login">Логин</FieldInput>
      <FieldInput class="field-input" fieldId="password" type="password" v-model="password">Пароль</FieldInput>
    </div>
    <div v-else-if="typeForm === 'up'" class="app-form">
      <Heading h="h3" class="title">Регистрация</Heading>
      <FieldInput class="field-input" fieldId="login" v-model="login">Логин</FieldInput>
      <FieldInput class="field-input" fieldId="password" type="password" v-model="password">Пароль</FieldInput>
      <FieldInput class="field-input" fieldId="email" type="email" v-model="email">Почта</FieldInput>
    </div>
    <Button type="submit">Войти</Button>
  </form>
</template>

<script>
// @ui-kit
import Button from "@/ui-kit/Button.vue";
import Heading from "@/ui-kit/Heading.vue";

// @components
import FieldInput from "@/components/field-input";

export default {
  name: 'AuthView',
  data() {
    return {
      typeForm: 'in',
      login: '',
      password: '',
      email: '',
    }
  },
  components: {
    Button,
    FieldInput,
    Heading,
  },
  methods: {
    selectForm(type) {
      this.typeForm = type;
    },
    auth() {
      this.typeForm === 'in' && this.$store.dispatch(
        'signin',
        { login: this.login, password: this.password }
      );
      this.typeForm === 'up' && this.$store.dispatch(
        'signup',
        {
          login: this.login, 
          password: this.password,
          email: this.email,
        }
      );
    },
  },
  beforeCreate () {
    const token = localStorage.getItem(process.env.VUE_APP_TOKEN_NAME);
    if (token) {
      this.$router.push('/')
    }
  },
}
</script>

<style scoped>
.auth {
  text-align: center;
  margin: 12px auto;
  width: 75%;
  border: 2px solid thistle;
  padding: 12px;
  border-radius: 12px;
  background: wheat;
}
.field-input {
  width: 50%;
  margin: 12px auto;
}
.app-form {
  margin: 12px auto;
}
.select-btns {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 12px auto;
  border: 2px solid thistle;
  padding: 12px;
  border-radius: 12px;
  background: wheat;
  flex-wrap: nowrap;
}
.select-btn {
  width: 100%;
}</style>