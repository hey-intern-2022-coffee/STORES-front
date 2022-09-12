import { Ref, ref } from 'vue'

export const useFetch = (
  callback: (...arg: any) => Promise<void>
): { fetchPending: Ref<boolean> } => {
  const fetchPending = ref(true)
  ;(async () => {
    await callback()
    fetchPending.value = false
  })()
  return { fetchPending }
}
