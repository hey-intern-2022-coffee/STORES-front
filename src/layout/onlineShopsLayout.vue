<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { APP_NAME } from '../modules/constant'

const router = useRouter()
const route = useRoute()
const isShowNav = computed(() => ![route.fullPath].includes('/'))
const goBack = () => router.go(-1)

const goHomePage = () => router.push({ name: 'onlineShop' })
</script>

<template>
  <div>
    <div class="header">
      <div class="nav">
        <template v-if="isShowNav">
          <span> &lt; </span>
          <span @pointerup="goBack" class="go-back">戻る</span>
        </template>
      </div>
      <div @click="goHomePage" class="title-content">
        <span class="text-large font-600 mr-3"> {{ APP_NAME }} </span>
      </div>
      <div class="credit"></div>
    </div>
    <router-view />
  </div>
</template>
<style scoped>
.header {
  background-color: #abc7ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  padding-left: 3%;
  padding-right: 3%;
}
.content {
  display: flex;
  justify-content: center;
}
.title-content {
  display: flex;
  justify-content: center;
}
.nav {
  width: 20vw;
}
.nav .go-back {
  text-decoration: underline;
}
.nav .go-back:hover {
  color: rgb(129, 129, 129);
}
.title-content {
  width: 30vw;
}
.credit {
  width: 20vw;
}
</style>
