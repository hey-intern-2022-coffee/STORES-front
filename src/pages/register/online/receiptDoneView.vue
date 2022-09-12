<script setup lang="ts">
import { ONLINE_RECEIVED_DONE } from '../../../modules/register/constant'
import ButtonWithLoading from '@/components/ButtonWithLoading.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const isLoading = ref(false)
const pushToQrReader = () => {
  isLoading.value = true
  router.push({ name: 'online-receipt-qr-reader' })
}
const pushToHome = () => {
  isLoading.value = true
  router.push({ name: 'register' })
}
</script>
<template>
  <div class="title">
    <h1>{{ ONLINE_RECEIVED_DONE.TITLE }}</h1>
  </div>
  <div class="wrapper">
    <div class="content">
      {{ ONLINE_RECEIVED_DONE.CONTENT }}
    </div>
    <div class="btn">
      <ButtonWithLoading
        :text="'QR読取画面に戻る'"
        :click-method="pushToQrReader"
        :custom-style="'width: 25vw;height: 5vh;background-color:rgba(0,0,0,0);color:black;'"
        :is-loading="isLoading"
        class="each-btn"
      />
      <ButtonWithLoading
        :text="'ホームに戻る'"
        :click-method="pushToHome"
        :custom-style="'width: 25vw;height: 5vh;background-color:rgba(0,0,0,0);color:black;'"
        :is-loading="isLoading"
        class="each-btn"
      />
    </div>
  </div>
</template>
<style scoped>
.title,
.wrapper,
.content,
.btn {
  display: flex;
  justify-content: center;
  margin-top: 1%;
  margin-bottom: 1%;
}
.wrapper {
  height: 80vh;
  flex-direction: column;
}
.btn {
  margin-top: 5vh;
  align-items: center;
  flex-direction: column;
}
.each-btn {
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>
