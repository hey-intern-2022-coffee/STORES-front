<script setup lang="ts">
import { ref } from 'vue'

const userInfo = ref({
  nameOrId: '',
  pass: ''
})
const formatter = (value: string) => value
// `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
const parser = (value: string) => value.replace(/\$\s?|(,*)/g, '')
</script>

<template>
  <div>authentication</div>
  <div>
    <label for="userId"> ユーザーID: </label>
    <el-input
      id="userId"
      v-model="userInfo.nameOrId"
      placeholder="ユーザーID"
      :formatter="formatter"
      :parser="parser"
    />
    <label for="userPass"> パスワード： </label>
    <el-input
      id="userPass"
      v-model="userInfo.pass"
      type="password"
      placeholder="パスワード"
      show-password
    />
  </div>
</template>

<style scoped></style>
