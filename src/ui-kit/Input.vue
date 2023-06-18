<template>
  <input 
    :type="type" 
    :id="id" 
    :name="name" 
    @input="$emit('update:modelValue', $event.target.value)"
    :required="required">
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

</style>