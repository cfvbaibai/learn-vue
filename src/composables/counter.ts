import { onMounted, onUnmounted, ref } from "vue";

let key = 0;
function getKey() {
  return ++key
}
export function useCounter() {
  const count = ref(0)
  const key = getKey()
  function incr() {
    ++count.value
  }
  onMounted(() => {
    console.log(`${key} is mounted!`)
  })
  onUnmounted(() => {
    console.log(`${key} is unmounted!`)
  })
  return { count, incr, key }
}
