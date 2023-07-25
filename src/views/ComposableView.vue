<script lang="tsx" setup>
import { ref } from 'vue';
import MultiCounters from '../components/MultiCounters.vue'
const quantity = ref(4)
</script>
<template>
  <div class="root">
    <div class="toolbar">
      <button @click="() => ++quantity">+</button>
      <button @click="() => --quantity">-</button>
      <span>quantity: {{ quantity }}</span>
    </div>
    <MultiCounters :quantity="quantity" />
  </div>
</template>
<style scoped>
.root {
  display: flex;
  flex-direction: column;
  gap: 24px; 
}
.toolbar {
  display: flex;
  gap: 8px;
}
button { width: 50px; }
</style>
