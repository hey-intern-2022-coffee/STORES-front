<script setup lang="ts">
import { PropType, ref, watch } from 'vue'
import { ItemInfoForCheckoutForm } from '../modules/onlineShop/types/checkout'
import { Check, Close } from '@element-plus/icons-vue'
const props = defineProps({
  item: {
    type: Object as PropType<ItemInfoForCheckoutForm>,
    required: true
  },
  modelValue: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])
watch(
  () => props.modelValue,
  val => emit('update:modelValue', val)
)
</script>

<template>
  <div>
    <el-card :body-style="{ padding: '0px', width: '100%' }" class="el-card">
      <div class="card-content">
        <div class="images">
          <img :src="item.img" />
        </div>
        <div class="center">
          <div>{{ item.title }}</div>
          <div>&yen;{{ item.price }}</div>
          <div>受取方法: {{ item.receive }}</div>
        </div>
        <div class="end">
          <div>数量: {{ item.count }}</div>
          <div class="shop-name">販売元: {{ item.shopName }}</div>
        </div>
        <div class="switches">
          <el-switch
            v-model="modelValue"
            class="mt-2"
            style="margin-left: 24px"
            inline-prompt
            :active-icon="Check"
            :inactive-icon="Close"
          />
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.el-card {
  margin-top: 1%;
  margin-bottom: 1%;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 8rem;
  margin-left: 1%;
  margin-right: 1%;
  padding-right: 3%;
}
.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.images {
  margin-right: 1rem;
  width: 32%;
  height: auto;
}
.images img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.center {
  margin-right: auto;
}
.shop-name {
  font-size: x-small;
}
</style>
