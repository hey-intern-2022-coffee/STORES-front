<script setup lang="ts">
import { onMounted, ref } from "vue";
import QRCode from "qrcode";
defineProps<{ msg: string }>();
const count = ref(0);
const qrcodeSrc = ref("");
const UrlIncludePurchaseid = ref("https://hey-intern-2022.b/?id=019283102938"); // fron BE
QRCode.toDataURL(UrlIncludePurchaseid.value, function (err: any, url: string) {
  // console.log(`<img src="${url}">`); // FIXME: delete
  qrcodeSrc.value = url;
});
</script>

<template>
  <h1>{{ msg }}</h1>
  <!-- <img
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAABmJLR0QA/wD/AP+gvaeTAAAFXUlEQVR4nO2dT2gUVxzHPxtz0IDSaBZMDRJacjBFRcFCEaSHoBJBQSGxPWhLLYgHFTx4K54iRQQFD/7FCi0txNpLYy2BEPASIQUxpIgSBKM5GpDUeNrXw5uQ3dl1d9/Mm8nOL78PLMP83r8Zvvt77/3e/MsZYwyKGJqW+gAUv6igwlBBhaGCCsNJ0OfPYXAQJiaq5xschHv3oh3Q+/e2/NjYom1szNrm56PVOT9vy9+/H618pjAOXL5sDBhz9uyH8xQKNk9Li0vNi8zM2PL9/Yu2w4et7fXraHVOT9vynZ3RymcJ7XKFoYIKoznNxt6+hdu3YXzc7m/bBkeOQFtbtPqePYPr12FyEnI52L4djh+Hjg5/x5w1UvPQiQno7obTp2FoCEZG4MwZ2LQJRkfd67t7FzZvhkuXYGYGXryAgQHbxoMHpXmbm0u3kol0io8fW8+oRKWFxLk5OHAAZmetEIcOWfvDh7B/Pxw8CFNT0NpaX/tTU3D0KLS3w/AwdHVZ+/g47N0LfX3We9evt/Z166wHr13rdp6ZxGUGtTDLredXPMu9csXazp8vr/PCBZt27Zrdr2eWe/Kk3b9zp7y+ixdt2sBAqb211ZjeXpezzSaRPLS/H44d+9AfBHbvLrUtdIG7dlkvLWbHDrutFdsWMzJiu8++vvK0PXtsV/7oUam9rc16qnQiCdrZCT09ldMqdbkvX9rtzp0frjMsdDVevbLd6cqV5Wn5fOX68vnok68skco0IZez25s3Yc2aynk2bHCrs1CobH/zxm5Xry615/PLw0NjrxQBoV8uGEf/K7L9Edg+r5D/IwM9Bj4J9tuDvL8V5fk1sH1sjDFm61ZjmpqMmZ0tP0b4Osj7Y6idbwx8WdZ+LcqPN9lfXFIKW/4Mtt9VSPsBGAa66q5t3z7roVevVkr9NtiGF5N/AkbrbiOrpBSZ/QycAL4HZoGhoOmvAtvfWFHr49QpuHULzp2Dpibo7YV37+DGDYAe4HegeFbUAUwD/wKfxT6bhsbFnaN3uRjIG/grFN4UDAwaaC3KV7vLNcaYJ0+M6e4uDZVyOWPgFwMtobY7gjyT4rvcXHDQkcktzHgW/yBV8z99akOUVatgyxbYuDF6/YUCrFjxBfApMAf8gzHTVcuHqXW8rufniu/6UxfUd/2u6WGkCapXW4Shggoj8VlurS4vjGuXk3T+WiR9fq6ohwpDBRWGCiqMZXANvzpJhyVpox4qDBVUGCqoMDI/htYaA12XArOOeqgwVFBhqKDCSHwMTTqui1v/Upf3jXqoMFRQYaigwvA+hqYd5/m+RcX1lpRGQz1UGCqoMFRQYcS+jbPRkHZ90xX1UGGooMJQQYUROw5NOg50HRNdx8y4Y27cONb3GK8eKgwVVBgqqDC8P07oiu+11bj50358MIw+TqiUoIIKQwUVhvfroa5jWNxH6n2j10OVhkIFFYYKKgxxcahvGv01NmHUQ4WhggpDBRWG93uKljpu9P3eoKVe+3VFPVQYKqgwVFBhpL6W65ulHuPixskahypVUUGFoYIKw/t9uUnj+z1Evt9zlPZ9wWHUQ4WhggpDBRVGw8ehcddmfX/mw7V82nGxeqgwVFBhqKDCyPx3W+LGwXGfP036+VVX1EOFoYIKQwUVRubfOe8adyb9+cpa7YXROFSpigoqDBVUGJkfQ13HKN/XS32vNev1UKUEFVQYKqgwxH23pdHiRL0eqsRCBRWGCioM8d9tqUWtMS7pMVbjUKUqKqgwVFBhiPtuy3JHPVQYKqgwVFBhqKDCUEGFoYIKQwUVhgoqDBVUGCqoMFRQYaigwlBBhaGCCkMFFcb/JCAhpAILP7YAAAAASUVORK5CYII="
  /> -->
  <img :src="qrcodeSrc" alt="" />
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
