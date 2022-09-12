import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/authentication',
    component: () =>
      import(
        /* webpackChunkName: "authentication" */ '@/pages/authentication.vue'
      )
  },
  {
    path: '/',
    component: () =>
      import(
        /* webpackChunkName: "online-shop" */ '@/layout/onlineShopsLayout.vue'
      ),
    children: [
      {
        path: '',
        name: 'onlineShop',
        component: () =>
          import(
            /* webpackChunkName: "online-shop" */ '@/pages/onlineShop/index.vue'
          )
      },
      {
        path: 'cart',
        name: 'shoppingCartView',
        component: () =>
          import(
            /* webpackChunkName: "online-shop" */ '@/pages/onlineShop/shoppingCartView.vue'
          )
      },
      {
        path: 'checkout',
        name: 'checkoutView',
        component: () =>
          import(
            /* webpackChunkName: "online-shop" */ '@/pages/onlineShop/checkoutView.vue'
          )
      },
      {
        path: 'completeCheckout',
        name: 'completeCheckoutView',
        component: () =>
          import(
            /* webpackChunkName: "online-shop" */ '@/pages/onlineShop/completeCheckoutView.vue'
          )
      },
      {
        path: '/qr/:purchaseId',
        name: 'qrCodeView',
        component: () =>
          import(
            /* webpackChunkName: "online-shop" */ '@/pages/onlineShop/qrCodeView.vue'
          ),
        props: route => ({ purchaseId: Number(route.params.id) })
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundError',
    component: () =>
      import(/* webpackChunkName: "not-found" */ '@/pages/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
