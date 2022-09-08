import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/authentication",
    component: () =>
      import(
        /* webpackChunkName: "authentication" */ "@/pages/authentication.vue"
      ),
  },
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "online-shop" */ "@/layout/onlineShopsLayout.vue"
      ),
    children: [
      {
        path: "",
        // name: "onlineShop",
        component: () =>
          import(
            /* webpackChunkName: "online-shop" */ "@/pages/onlineShop/index.vue"
          ),
      },
      {
        path: "cart",
        name: "shoppingCartView",
        component: () =>
          import(
            /* webpackChunkName: "online-shop" */ "@/pages/onlineShop/shoppingCartView.vue"
          ),
      },
      {
        path: "checkout",
        name: "checkout",
        component: () =>
          import(
            /* webpackChunkName: "online-shop" */ "@/pages/onlineShop/checkoutView.vue"
          ),
      },
      {
        path: "qr",
        name: "qrCodeView",
        component: () =>
          import(
            /* webpackChunkName: "online-shop" */ "@/pages/onlineShop/qrCodeView.vue"
          ),
      },
    ],
  },
  {
    path: "/stock-manager",
    component: () =>
      import(
        /* webpackChunkName: "stock-manager" */ "@/layout/stockManagerLayout.vue"
      ),
    children: [
      {
        path: "",
        name: "online-offline",
        component: () =>
          import(
            /* webpackChunkName: "stock-manager" */ "@/pages/stockManager/index.vue"
          ),
      },
      {
        path: "online",
        name: "online",
        component: () =>
          import(
            /* webpackChunkName: "stock-manager" */ "@/pages/stockManager/online/index.vue"
          ),
      },
      {
        path: "offline",
        name: "offline",
        component: () =>
          import(
            /* webpackChunkName: "stock-manager" */ "@/pages/stockManager/offline/index.vue"
          ),
      },
    ],
  },
  {
    path: "/register",
    component: () =>
      import(
        /* webpackChunkName: "offline-register" */ "@/layout/registerLayout.vue"
      ),
    children: [
      {
        path: "",
        name: "register",
        component: () =>
          import(
            /* webpackChunkName: "offline-register" */ "@/pages/register/index.vue"
          ),
      },
      {
        path: "online/confirmation",
        name: "online-confirm-receipt",
        component: () =>
          import(
            /* webpackChunkName: "offline-register" */ "@/pages/register/online/receiptConfirmationView.vue"
          ),
      },
      {
        path: "online/done",
        name: "online-receipt-done",
        component: () =>
          import(
            /* webpackChunkName: "offline-register" */ "@/pages/register/online/receiptDoneView.vue"
          ),
      },
      {
        path: "offline",
        name: "offline-register",
        component: () =>
          import(
            /* webpackChunkName: "offline-register" */ "@/pages/register/offline/posView.vue"
          ),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFoundError",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "@/pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;