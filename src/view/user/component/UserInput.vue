<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{
  modelValue: string;
  inputPlaceholder: string;
  label: string;
  type: string;
}>();

const emit = defineEmits<{(event: 'update:modelValue', value: string): void; }>();

const uniqueId = `input-${Math.random().toString(36).slice(2, 9)}`;
const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <div class="user-input">
    <label :for="uniqueId">{{ label }}
    <input
      :id="uniqueId"
      :placeholder="inputPlaceholder"
      :value="modelValue"
      @input="updateValue"
      :type="type"
    />
    </label>
  </div>
</template>

<style scoped>
.user-input{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
label{
  font-size: 14px;
  color: #5a607f;
  margin-bottom: 5px;
}
input{
  width: 100%;
  height: 40px;
  border: 1px solid #d9e1ec;
  border-radius: 4px;
  padding: 0 15px;
  box-sizing: border-box;
}
</style>
