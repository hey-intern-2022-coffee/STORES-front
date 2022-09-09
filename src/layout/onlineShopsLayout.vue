<script setup lang="ts">
import { computed, defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const isShowNav = computed(()=>![route.fullPath].includes('/'))
const goBack = () => router.go(-1)
</script>

<template>
  <div>
    <div class="header">
      <div class="nav">
        <div v-if="isShowNav" @pointerup="goBack" class="go-back">Go back</div>
      </div>
      <div class="title-content">
        <span class="text-large font-600 mr-3"> Title </span>
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
