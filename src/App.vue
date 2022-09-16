<script setup lang="ts">
import FooterBar from './fragments/FooterBar.vue'
</script>

<template>
  <div class="root-wrapper"><router-view></router-view></div>
  <footer>
    <footer-bar></footer-bar>
  </footer>
</template>

<style scoped>
.root-wrapper {
  width: 100%; /*ブロックの幅*/
  height: 93vh; /*ブロックの高さ*/
  overflow: scroll; /*スクロール*/
}
@media screen and (max-width: 460px) {
  .root-wrapper {
    height: 90vh; /*ブロックの高さ*/
  }
}
footer {
  position: absolute; /*←絶対位置*/
  bottom: 0; /*下に固定*/
}
</style>
