<script lang="ts" setup>
import { useCounter } from '@/composables/counter';

const { count, incr, key } = useCounter()
</script>
<template>
  <div class="root">
    <div class="count">Count: {{ count }}</div>
    <button @click="incr">+{{ key }}</button>
  </div>
</template>
<style scoped>
.root {
  display: flex;
  flex-direction: row;
  gap: 16px;
}
.count {
  width: 100px;
}
</style>