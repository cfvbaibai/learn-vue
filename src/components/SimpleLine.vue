<script lang="ts">
import { sbGlobalName } from '@/symbols';
import { defineComponent, inject } from 'vue';

export default defineComponent({
  props: {
    header: { type: String },
    text: { type: String },
  },
  emits: ['update:text'],
  setup() {
    const globalName = inject(sbGlobalName)
    return { globalName }
  }
})
</script>
<template>
  <div class="root">
    <h2>{{ $props.header }}</h2>
    <div class="body1">
      <slot name="body1" header="James"></slot>
    </div>
    <div class="body2">
      <slot name="body2"></slot>
    </div>
    <div>{{ globalName }}</div>
    <div>
      <input :value="$props.text" @input="$emit('update:text', ($event.target as HTMLInputElement).value)" />
    </div>
  </div>
</template>
<style scoped>
.root {
  border: solid 1px #aaa;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.body1 {
  border: solid 1px #eee;
  padding: 8px;
  color: red;
}
.body2 {
  border: dashed 1px #666;
  padding: 8px;
  color: blue;
}
</style>
