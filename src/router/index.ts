import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("@/views/home/index.vue"),
      meta: {
        title: "首页",
        showWindowBar: true,
      },
    },
    {
      path: "/other",
      name: "Other",
      component: () => import("@/views/other/index.vue"),
      meta: {
        title: "煲汤",
        showWindowBar: true,
      },
    },
    {
      path: "/other/detail",
      name: "OtherDetail",
      component: () => import("@/views/other/detail.vue"),
      meta: {
        title: "煲汤详情",
        showWindowBar: true,
      },
    },
    {
      path: "/goods/detail",
      name: "GoodsDetail",
      component: () => import("@/views/goods/detail.vue"),
      meta: {
        title: "药材详情",
        showWindowBar: true,
      },
    },
    // {
    //   path: '/404',
    //   component: () => import('@/views/error/404.vue'),
    //   meta: {
    //     title: '404',
    //   }
    // },
    {
      path: "/:pathMatch(.*)*",
      name: "others",
      redirect: "/404",
    },
  ],
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach(async (to, from, next) => {
  console.log(to, from);
  next();
});

router.afterEach((to, from) => {
  console.log(to, from);
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title + "";
  }
});

export default router;
