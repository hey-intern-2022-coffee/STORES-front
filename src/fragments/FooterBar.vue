<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { menus } from '../modules/constant'
import { pathNameUnion } from '../types'
import BottomNavigationBar from '../components/BottomNavigationBar.vue'

const router = useRouter()
const route = useRoute()
const currentPathName = computed<pathNameUnion>(
  () => route.name as pathNameUnion
) // FIXME: アサーション
const isActive = (path: pathNameUnion) => [currentPathName.value].includes(path)

const toPath = (name: pathNameUnion) => router.push({ name })
</script>
<template>
  <div>
    <div>
      <BottomNavigationBar
        :current-path-name="currentPathName"
        :is-active="isActive"
        :to-path="toPath"
        :menus="menus"
      />
    </div>
  </div>
</template>
<style scoped></style>
