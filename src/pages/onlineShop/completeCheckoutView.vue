<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { COMPLETE_CHECKOUT_VIEW_TEXT_IN_ONLINE_STORE } from '../../modules/constant'
import ButtonWithLoading from '../../components/ButtonWithLoading.vue'

const localhostQrUrl = ref(`${import.meta.env.VITE_BASE_URL}/qr/19283102938`)
const router = useRouter()
const isLoading = ref(false)
const toLocalhostQrUrl = () => {
  isLoading.value = true
  window.location.href = localhostQrUrl.value
}
</script>
<template>
  <div class="wrapper">
    <div class="thanks">
      {{ COMPLETE_CHECKOUT_VIEW_TEXT_IN_ONLINE_STORE.thanks }}
    </div>
    <div class="annotation-top">
      {{ COMPLETE_CHECKOUT_VIEW_TEXT_IN_ONLINE_STORE.annotation.top }}
    </div>
    <div>
      <ButtonWithLoading
        :text="'QRコードはこちら'"
        :click-method="toLocalhostQrUrl"
        :custom-style="'width: 50vw;height: auto;'"
        :is-loading="isLoading"
      />
    </div>
    <div class="annotation-bottom">
      {{ COMPLETE_CHECKOUT_VIEW_TEXT_IN_ONLINE_STORE.annotation.bottom }}
    </div>
  </div>
</template>
<style scoped>
.el-button .custom-loading .circular {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
}
.el-button .custom-loading .circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-button-text-color);
  stroke-linecap: round;
}
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  padding-left: 6%;
  padding-right: 6%;
}

.thanks,
.annotation-top,
.annotation-bottom {
  margin-top: 1rem;
  margin-bottom: 1rem;
  overflow-wrap: break-word;
}
</style>
