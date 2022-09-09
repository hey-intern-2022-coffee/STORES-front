<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import QR from '../../components/QR.vue'
import { QR_CODE_VIEW_TEXT_IN_ONLINE_STORE } from '../../modules/constant'

const route = useRoute()
const purchaseId = computed(() => route.query.id)
const receiveUrl = ref(
  `http://192.168.0.113:5173/register/online/confirmation?id=${purchaseId.value}`
)
</script>
<template>
  <div class="qr-page">
    <template v-if="!!purchaseId">
      <h1>{{ QR_CODE_VIEW_TEXT_IN_ONLINE_STORE.annotation.top }}</h1>
      <div class="qr-code">
        <QR :url="receiveUrl" />
      </div>
      <div>{{ QR_CODE_VIEW_TEXT_IN_ONLINE_STORE.annotation.bottom }}</div>
    </template>
    <template v-else>
      <div>
        購入IDが正しくありません。
        メールを再度ご確認の上、もう一度アクセスしてください。
      </div>
    </template>
  </div>
</template>
<style scoped>
.qr-page {
  height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 5%;
}
.qr-code {
  display: flex;
  justify-content: center;
}
</style>
