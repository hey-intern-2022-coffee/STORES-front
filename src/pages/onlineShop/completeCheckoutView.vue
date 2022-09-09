<script setup lang="ts">
import { ref } from 'vue'
import { COMPLETE_CHECKOUT_VIEW_TEXT_IN_ONLINE_STORE } from '../../modules/constant.js'
const localhostQrUrl = ref('http://192.168.0.113:5173/qr?id=019283102938')
</script>
<template>
  <div>
    <div>
      {{ COMPLETE_CHECKOUT_VIEW_TEXT_IN_ONLINE_STORE.thanks }}
    </div>
    <div>
      {{ COMPLETE_CHECKOUT_VIEW_TEXT_IN_ONLINE_STORE.annotation.top }}
    </div>

    <a :href="localhostQrUrl">QRコードはこちら</a>
    <div>
      {{ COMPLETE_CHECKOUT_VIEW_TEXT_IN_ONLINE_STORE.annotation.bottom }}
    </div>
  </div>
</template>
<style scoped></style>
