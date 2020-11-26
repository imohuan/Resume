import { ref, onMounted, onUnmounted, Ref } from 'vue'

export default function useClickOutside(elementRefs: Ref<null | HTMLElement>[]) {
  const isClickOutside = ref(false)
  const handler = (e: MouseEvent) => {
    isClickOutside.value = elementRefs.map(f => {
      let isOut = false;
      if (f.value) {
        if (f.value.contains(e.target as HTMLElement)) {
          isOut = false
        } else {
          isOut = true
        }
      }
      return isOut
    }).every(f => f)
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickOutside
}