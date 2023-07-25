<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import SimpleLine from '@/components/SimpleLine.vue'
const counts: Ref<number[]> = ref([1, 2, 3, 4, 5])
function incr(i: number) {
  ++counts.value[i]
}
function incr0() {
  incr(0)
}
function incr1() {
  incr(1)
}
function incr2() {
  incr(2)
}
const showNumber = ref(0)
function toggle() {
  showNumber.value = 1 - showNumber.value
}
const text = ref('')
const lineText = ref<string>('')
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="toggle">toggle</button>
    <button class="button0" v-show="showNumber === 0" @click="incr0">{{ counts[0] }}</button>
    <button class="button1" v-show="showNumber === 1" @click="incr1">{{ counts[1] }}</button>
    <button class="button2" @click.ctrl="incr2">{{ counts[2] }}</button>
    <div>Text: <input v-model="text" /></div>
    <div>Recall: {{ text }}</div>
    <SimpleLine header="Nice" v-model:text="lineText">
      <template #body1="slotProps">This is so nice: {{ slotProps.header }}</template>
      <template #body2>Wheeeeeeeeew!</template>
    </SimpleLine>
    <div>Line Text: {{ lineText }}</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  button {
    width: 200px;
  }

  button.button0 {
    color: red;
  }

  button.button1 {
    color: blue;
  }
}
</style>
