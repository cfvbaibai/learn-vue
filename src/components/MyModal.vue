<script setup lang="ts">
import { ref } from 'vue'

const open = ref(true)
function close() {
  open.value = false
}
</script>
<template>
  <Modal :open="open">
    <button @click="close">Close</button>
  </Modal>
</template>
<style scoped></style>
