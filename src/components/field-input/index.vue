<template>
  <div class="field-input">
    <Label :forId="fieldId" class="label">
      <slot></slot>
    </Label>
    <Input 
      :id="fieldId" 
      :name="fieldId" 
      :type="type" 
      class="input" 
      @input="$emit('update:modelValue', $event.target.value)" 
      :required="true"/>
  </div>
</template>

<script>
// @ui-kit
import Input from "@/ui-kit/Input.vue";
import Label from "@/ui-kit/Label.vue";

export default {
  name: 'FieldInputComponent',
  props: {
    fieldId: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: () => 'text'
    },
    modelValue: String,
  },
  emits: ['update:modelValue'],
  components: {
    Input,
    Label,
  },
}
</script>

<style scoped>
.field-input {
  width: 50%;
  margin: 12px auto;
}
.label {
  display: block;
  text-align: left;
  margin: 6px;
  font-size: 16px;
  font-weight: bold;
  color: brown;
  cursor: pointer;
}
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