<script setup lang="ts">
import { ref } from "vue";
import QRCode from "qrcode";

const props = defineProps<{
  url: { type: string; default: "https://hey-intern-2022.b/?id=019283102938" };
}>();
const qrcodeSrc = ref("");
QRCode.toDataURL(props.url, function (err: any, url: string) {
  qrcodeSrc.value = url;
});
</script>

<template>
  <div>
    <img :src="qrcodeSrc" alt="" />
  </div>
</template>

<style scoped></style>
