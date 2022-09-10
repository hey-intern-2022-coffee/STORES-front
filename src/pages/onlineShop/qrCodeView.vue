<script setup lang="ts">
import { computed, ref, VNodeRef } from 'vue'
import { useRoute } from 'vue-router'
import QR from '../../components/QR.vue'
import {
  INVALID_PURCHASE_ID,
  QR_CODE_VIEW_TEXT_IN_ONLINE_STORE,
  SAVE_QR_CODE
} from '../../modules/constant'
import { htmlToCanvas } from '../../modules/utils/htmlToCanvas'

const route = useRoute()
const purchaseId = computed(() => Number(route.params.purchaseId))

const qrInfo = ref<HTMLElement>()

const saveImage = () => {
  if (qrInfo.value) htmlToCanvas(qrInfo.value)
}
</script>
<template>
  <div class="qr-page">
    <template v-if="!!purchaseId">
      <span class="captured-area" ref="qrInfo">
        <h1>{{ QR_CODE_VIEW_TEXT_IN_ONLINE_STORE.annotation.top }}</h1>
        <div class="text-in-image"></div>
        <div class="qr-code">
          <QR :src="`${purchaseId}`" />
        </div>
        <div class="id">id: {{ purchaseId }}</div>
      </span>

      <div class="btn">
        <el-button @click="saveImage"> {{ SAVE_QR_CODE }} </el-button>
      </div>

      <div>{{ QR_CODE_VIEW_TEXT_IN_ONLINE_STORE.annotation.bottom }}</div>
    </template>
    <template v-else>
      <div>
        {{ INVALID_PURCHASE_ID }}
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
.captured-area {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 5%;
  margin-top: 2%;
  margin-bottom: 5%;
}
.btn {
  margin-bottom: 5%;
}
.id {
  text-align: center;
}
</style>
