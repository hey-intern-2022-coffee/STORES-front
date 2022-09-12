<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ButtonWithLoading from '../../components/ButtonWithLoading.vue'
import { MENU } from '../../modules/register/constant'
const router = useRouter()

const toOnline = () => {
  router.push({ name: 'online-receipt-qr-reader' })
}
const toOffline = () => {
  router.push({ name: 'offline-register' })
}
const isLoading = ref({ online: false, offline: false })
</script>
<template>
  <div class="wrapper">
    <div class="titles">
      <h1>register</h1>
    </div>
    <div class="btns">
      <div>
        <ButtonWithLoading
          :text="MENU.ONLINE"
          :click-method="toOnline"
          :custom-style="'width: 50vw;height: auto;'"
          :is-loading="isLoading.online"
          class="btn"
        />
      </div>
      <div>
        <ButtonWithLoading
          :text="MENU.OFFLINE"
          :click-method="toOffline"
          :custom-style="'width: 50vw;height: auto;'"
          :is-loading="isLoading.offline"
          class="btn"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.btns,
.titles {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
}
.btns {
  height: 70%;
}
.btn {
  margin-top: 7%;
  margin-bottom: 7%;
}
.wrapper {
  height: 80vh;
  /* display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch; */
}
</style>
