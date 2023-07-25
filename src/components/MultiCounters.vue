<script lang="tsx" setup>
import { computed } from 'vue'
import SimpleCounter from '../components/SimpleCounter.vue'
import { useCounter } from '../composables/counter'

const props = defineProps({ quantity: { type: Number } })
const counters = computed(() => new Array(props.quantity).fill(0).map(() => useCounter()))

</script>
<template>
  <div class="root">
    <div>QUANTITY: {{ props.quantity }}</div>
    <div>
      <h3>Iterable Composables</h3>
      <div class="counter" v-for="(counter, i) in counters" :key="i">
        <span>{{ counter.count }}</span>
        <button @click="counter.incr">+{{ counter.key }}</button>
      </div>
    </div>
    <div>
      <h3>Iterable Components</h3>
      <div class="counter" v-for="i in quantity" :key="i">
        <SimpleCounter />
      </div>
    </div>
  </div>
</template>
<style scoped>
button {
  width: 100px;
  background-color: #050505;
  color: #c9c9c9;
  border: solid 1px #efefef;
  cursor: hand;
}
button:active {
  background-color: #393939;
  transform: scale(0.9);
  border-color: #c9c9c9;
}
.root {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.counter {
  display: flex;
  gap: 8px;
}
.counter > span {
  width: 50px;
}
</style>