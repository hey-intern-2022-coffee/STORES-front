<script setup lang="ts">
import jsQR from 'jsqr'
import { computed, onMounted, ref } from 'vue'

const purchaseId = ref('')
const isLoading = ref(true)
const isReadyToGoBtnBg = computed(() =>
  !!purchaseId.value ? '#eb6100' : '#BBBBBB'
)
const isReadyToGoBtnColor = computed(() =>
  !!purchaseId.value ? '#ffffff' : '#dddddd'
)

const autoPushToConfirmationView = (_purchaseId: string) => {
  if (!_purchaseId) return
  const url = `${
    import.meta.env.VITE_BASE_URL
  }/register/online/confirmation/${_purchaseId}`
  window.open(url, '_blank')
  purchaseId.value = ''
}
const pushToConfirmationView = () => {
  if (!purchaseId.value) return
  const url = `${import.meta.env.VITE_BASE_URL}/register/online/confirmation/${
    purchaseId.value
  }`
  window.open(url, '_blank')
}

onMounted(() => {
  const video = document.createElement('video')
  const canvasElement = document.getElementById('canvas') as HTMLCanvasElement // FIXME: type assertion
  const canvas = canvasElement.getContext('2d')
  const loading = document.getElementById('loading')
  //   const output = document.getElementById('output')
  let isReadQR = false
  if (loading) loading.innerText = 'ロード中...'

  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: 'environment' } })
    .then(stream => {
      video.srcObject = stream
      video.setAttribute('playsinline', 'true')
      video.play()
      requestAnimationFrame(tick)
    })

  function tick() {
    if (loading) loading.innerText = 'ロード中...'
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      if (loading) loading.hidden = true
      if (!canvasElement) return
      canvasElement.hidden = false
      canvasElement.height = video.videoHeight
      canvasElement.width = video.videoWidth
      if (!canvas) return
      canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height)
      var imageData = canvas.getImageData(
        0,
        0,
        canvasElement.width,
        canvasElement.height
      )
      if (!imageData) return
      var code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      })
      if (code && !isReadQR) {
        purchaseId.value = code.data
        autoPushToConfirmationView(code.data)
        isReadQR = true
        isLoading.value = false
      }
    }
    requestAnimationFrame(tick)
  }
})
const LOADING_MESSAGE = 'ロード中...'
const ANNOTATION = `「事前決済受け取り用QRコード」を
はっきりと写してください。
自動で受け取り受付画面に遷移します。`
</script>
<template>
  <div>
    <div class="header">
      <h1 class="title">QR reader</h1>
      <h2>{{ ANNOTATION }}</h2>
    </div>

    <div class="reader">
      <!-- <div id="canvas"></div> -->
      <canvas id="canvas" class="canvas"></canvas>
      <div v-show="isLoading" id="loading">{{ LOADING_MESSAGE }}</div>
      <!-- <div id="output"></div> -->
      <div class="btn btn--orange" @click="pushToConfirmationView">
        遷移しない場合はこちらから
      </div>
    </div>
  </div>
</template>
<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;
  white-space: pre-wrap;
  /* background-color: #d9d9d9; */
}
.header .title {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.reader {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.canvas {
  width: 50vw;
  height: auto;
  max-height: 90vh;
  margin: 5rem;
}
.btn--orange,
.btn--orange {
  color: v-bind(isReadyToGoBtnColor);
  background-color: v-bind(isReadyToGoBtnBg);
}
.btn--orange:hover,
.btn--orange:hover {
  color: v-bind(isReadyToGoBtnColor);
  background-color: v-bind(isReadyToGoBtnBg);
}

.btn {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 0.5rem 1rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  border-radius: 0.5rem;
}
</style>
