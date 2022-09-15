<script setup lang="ts">
import { PropType, ref, watch } from 'vue'
import { ItemInfoForShoppingCart } from '../modules/onlineShop/types/checkout'

defineProps({
  item: {
    type: Object as PropType<ItemInfoForShoppingCart>,
    required: true
  },
  maxAbleToOrder: {
    type: Number,
    required: true
  },
  count: {
    type: Number,
    required: true
  }
})
const emit = defineEmits(['update:count'])
const _count = ref(1)
watch(_count, val => {
  emit('update:count', val)
})
</script>

<template>
  <div>
    <el-card :body-style="{ padding: '0px', width: '100%' }" class="el-card">
      <div class="card-content">
        <div class="images">
          <img :src="item.image_url" />
        </div>
        <div class="center">
          <div>{{ item.title }}</div>
          <div>&yen;{{ item.price }}</div>
          <div>受取方法: {{ item.receive }}</div>
        </div>
        <div class="end">
          <div>
            数量:
            <el-input-number v-model="_count" :min="0" :max="maxAbleToOrder" />
          </div>
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
