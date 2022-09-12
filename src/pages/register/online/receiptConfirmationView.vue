<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import GoodsCardForReceiveView from '@/components/GoodsCardForReceiveView.vue'
import ButtonWithLoading from '@/components/ButtonWithLoading.vue'
import { ONLINE_RECEIVED_VIEW } from '../../../modules/register/constant'
const route = useRoute()
const router = useRouter()
const purchaseId = computed(() => route.params.id)

const userData = ref([
  {
    key: 'name',
    data: '金本知憲',
    label: '氏名'
  },
  {
    key: 'id',
    data: '123456',
    label: 'ユーザーID: '
  }
])

// NOTE: BEから取れる値
const goodsInfo = ref([
  {
    title: '商品名うちわ',
    count: 1,
    price: 10000,
    img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    receive: '現地',
    shopName: 'amazon.com'
  },
  {
    title: '商品名うちわ',
    count: 1,
    price: 10000,
    img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    receive: '現地',
    shopName: 'amazon.com'
  },
  {
    title: '商品名うちわ',
    count: 1,
    price: 10000,
    img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    receive: '現地',
    shopName: 'amazon.com'
  }
])
const isReceivedItems = ref([
  {
    isReceived: false
  },
  {
    isReceived: false
  },
  {
    isReceived: false
  }
])
const isReadyToDone = computed(() =>
  isReceivedItems.value.every(it => it.isReceived)
)
const isLoading = ref(false)
const done = () => {
  if (!isReadyToDone.value) return
  isLoading.value = true
  // POST
  router.push({ name: 'online-receipt-done' })
}
</script>
<template>
  <div class="title">
    <h1>{{ ONLINE_RECEIVED_VIEW.TITLE }}</h1>
  </div>
  <div class="description">
    <ul>
      <li v-for="item in ONLINE_RECEIVED_VIEW.DESCRIPTION_POINTS">
        {{ item }}
      </li>
    </ul>
  </div>
  <div class="wrapper">
    <div class="user-infos">
      <div class="table">
        <table>
          <tr v-for="item in userData">
            <td>{{ item.label }}</td>
            <td>{{ item.data }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="goods-info">
      <span v-for="(item, index) in goodsInfo">
        <GoodsCardForReceiveView
          :item="item"
          :style="'width: 100%;'"
          class="each-goods"
          v-model="isReceivedItems[index].isReceived"
        />
      </span>
      <div class="btn">
        <ButtonWithLoading
          :text="'受け取り完了'"
          :click-method="done"
          :custom-style="
            isReadyToDone
              ? 'width: 25vw;height: 5vh;'
              : 'width: 25vw;height: 5vh;background-color:gray;'
          "
          :is-loading="isLoading"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper,
.user-infos,
.title,
.description,
.goods-infos {
  display: flex;
  align-items: center;
}
.wrapper {
  justify-content: space-between;
}
.user-infos,
.goods-infos,
.title,
.description {
  justify-content: center;
}
.title,
.description {
  margin-top: 1%;
  margin-bottom: 1%;
}
.user-infos {
  width: 30vw;
  /* align-items: flex-start; */
  /* justify-items: start; */
}
.table {
  /* margin-bottom: auto; */
}
.goods-infos {
  width: 70vw;
}
.each-goods {
}
table {
  border-collapse: collapse;
  text-align: center;
}
th,
td {
  padding: 5px;
  /* border: 1px solid #333; */
}

.btn {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
</style>
