<template>
  <input 
    :type="type" 
    :id="id" 
    :name="name" 
    @input="$emit('update:modelValue', $event.target.value)"
    :required="required"
    class="input">
</template>

<script>
export default {
  name: 'InputUiKit',
  props: {
    id: String,
    name: String,
    type: {
      type: String,
      default: () => 'text'
    },
    modelValue: String,
    required: Boolean,
  },
  emits: ['update:modelValue'],
}
</script>

<style scoped>
.input {
  width: 100%;
  border: none;
  border-bottom: 2px solid thistle;
  background: papayawhip;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-size: 14px;
  color: brown;
  font-weight: bold;
  padding: 6px;
}
.input:focus {
  outline: none;
  display: block;
}
</style>