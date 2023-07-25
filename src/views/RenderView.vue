<script lang="tsx">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    const count = ref(0)
    const width = ref<number>()
    const renderRoot = ref<HTMLDivElement | null>(null)
    onMounted(() => {
      width.value = renderRoot.value?.getBoundingClientRect().width
    })
    return { count, renderRoot, width}
  },
  render() {
    return (
      <div ref='renderRoot'>
        <div>计数：{this.count}</div>
        <div>宽度：{this.width}</div>
        <div><button onClick={() => this.count++}>++</button></div>
      </div>
    )
  }
})
</script>
