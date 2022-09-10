<script setup lang="ts">
import { ref } from 'vue'
import QRCode from 'qrcode'

const props = defineProps<{
  src: String
}>()
const qrcodeSrc = ref('')
QRCode.toDataURL(props.src, function (err: any, src: string) {
  qrcodeSrc.value = src
})
</script>

<template>
  <div>
    <img :src="qrcodeSrc" alt="" />
  </div>
</template>

<style scoped></style>
