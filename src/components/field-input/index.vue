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
      :required="!disabled || !readonly"
      :readonly="readonly"
      :disabled="disabled" />
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
    disabled: {
      type: Boolean,
      default: () => false,
    },
    readonly: {
      type: Boolean,
      default: () => false,
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
.label {
  display: block;
  text-align: left;
  margin: 6px;
  font-size: 16px;
  font-weight: bold;
  color: brown;
  cursor: pointer;
}
</style>