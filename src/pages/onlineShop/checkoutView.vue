<script setup lang="ts">
import {
  checkoutInfosEnum,
  LABELS_ON_CHECKOUT_FORM
} from '../../modules/constant'
import { _userInfoForCheckout } from '../../modules/__mock__/onlineShop'
import GoodsCardForCheckoutForm from '../../components/GoodsCardForCheckoutForm.vue'
import { useCheckout } from '../../modules/onlineShop/checkout/viewModels/index'
import ButtonWithLoading from '../../components/ButtonWithLoading.vue'

const { inputs, purchaseItem, allClear, checkout, isShowRequireds, isLoading } =
  useCheckout()
</script>

<template>
  <h1>{{ LABELS_ON_CHECKOUT_FORM.title.title }}</h1>
  <div class="form">
    <h2>{{ LABELS_ON_CHECKOUT_FORM.addressForm.title }}</h2>
    <form>
      <div v-for="inputInfo in inputs" class="input-items">
        <label>
          {{ inputInfo.placeholder }}
        </label>
        <template v-if="inputInfo.name === checkoutInfosEnum.name">
          <el-input
            class="input"
            v-model="inputInfo.model"
            :placeholder="inputInfo.placeholder"
            name="name"
        /></template>
        <template v-else>
          <el-input
            class="input"
            v-model="inputInfo.model"
            :placeholder="inputInfo.placeholder"
          >
            <template
              v-if="inputInfo.name === checkoutInfosEnum.zipCode"
              #prepend
            >
              &#12306;</template
            >
          </el-input>
        </template>
        <template v-if="isShowRequireds[inputInfo.name]">
          <span class="error-message">
            {{ LABELS_ON_CHECKOUT_FORM.orderInfo.warning }}</span
          >
        </template>
      </div>
    </form>
    <div class="all-clear">
      <el-button @pointerup="allClear" class="all-clear-btn">
        {{ LABELS_ON_CHECKOUT_FORM.addressForm.clearBtn }}
      </el-button>
    </div>
  </div>

  <div class="order-info">
    <h2>{{ LABELS_ON_CHECKOUT_FORM.orderInfo.title }}</h2>
    <div class="order-info-contents">
      <div>
        <GoodsCardForCheckoutForm :item="purchaseItem[0]" />
      </div>
      <div class="btn">
        <ButtonWithLoading
          :text="LABELS_ON_CHECKOUT_FORM.bottom.btn"
          :click-method="checkout"
          :custom-style="'width: 50vw;height: auto;'"
          :is-loading="isLoading"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin-top: 1%;
}
h1,
h2 {
  padding-left: 2%;
}
.input {
  width: 80%;
}
.form {
  margin-top: 2rem;
}
.form form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5%;
}

.input-items {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.input-items label {
  margin-right: auto;
}
.all-clear {
  display: flex;
  justify-content: end;
  margin-top: 1rem;
  margin-right: 0.5rem;
}
.all-clear:hover {
  color: rgb(38, 38, 38);
}
.btn {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
.btn .el-button {
  width: 50vw;
  height: auto;
}
.order-info {
  margin-top: 2rem;
}
.order-info-contents {
  padding: 3%;
}
.error-message {
  color: red;
  margin-left: auto;
  font-size: x-small;
}

/* .el-button .custom-loading .circular {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
}
.el-button .custom-loading .circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-button-text-color);
  stroke-linecap: round;
} */
</style>
