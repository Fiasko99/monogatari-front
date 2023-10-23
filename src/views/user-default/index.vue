<template>
  <div
    v-if="Object.keys(user).length > 0" 
    class="user-default">
    <form>
      <FieldInput
        class="field-input" 
        fieldId="login" 
        v-model="login"
        readonly
        >Логин</FieldInput>
      <FieldInput
        class="field-input" 
        fieldId="email" 
        v-model="email"
        readonly
        >Почта</FieldInput>
      <FieldInput
        class="field-input" 
        fieldId="password" 
        type="password" 
        readonly
        >Пароль</FieldInput>
    </form>
  </div>
</template>

<script>
import FieldInput from "@/components/field-input";

export default {
  name: 'UserDafaultView',
  data() {
    return {
      login: 'фкпфкпфу',
      email: 'фкпфукп',
    }
  },
  components: {
    FieldInput,
  },
  props: {
    user: {
      type: Object,
      default: () => {},
    }
  },
}
</script>

<style scoped>
.field-input {
  width: 50%;
  margin: 12px 0;
}
</style>