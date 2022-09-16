<script setup lang="ts">
import { ComputedRef, PropType } from 'vue'
import { bottomMenuElement, pathNameUnion } from '../types'

const props = defineProps({
  currentPathName: {
    type: String as PropType<pathNameUnion>,
    required: true
  },
  isActive: {
    type: Function as PropType<(path: pathNameUnion) => boolean>,
    required: true
  },
  toPath: {
    type: Function as PropType<(arg: pathNameUnion) => void>,
    required: true
  },
  menus: {
    type: Array<bottomMenuElement>,
    required: true
  }
})
</script>
<template>
  <div>
    <div class="navbar">
      <button
        v-for="item of menus"
        :key="item.id"
        @click="props.toPath(item.pathName)"
        class="btm-nav-btn"
        :class="{ 'active-btn': isActive(item.pathName) }"
      >
        <!-- FIXME: アイコンが欲しい -->
        <div
          class="btm-nav-label"
          :class="{
            'text-opacity-40': !isActive(item.pathName)
          }"
        >
          {{ item.label }}
        </div>
      </button>
    </div>
  </div>
</template>
<style scoped>
.navbar {
  width: 100vw;
}
.btm-nav-btn {
  width: 33.3333vw;
  height: 7vh;
  background-color: rgba(171, 199, 255, 0.3);
  border: 0;
}
.active-btn {
  background-color: rgba(171, 199, 255, 1);
}

@media screen and (max-width: 460px) {
  .btm-nav-btn {
    height: 10vh;
  }
}
</style>
