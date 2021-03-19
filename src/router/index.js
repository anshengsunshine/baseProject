import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // 登录
  {
    path: "/",
    name: "Login",
    hidden: true,
    meta: { label: "登录" },
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/user/Login.vue"),
  },
  // 管理后台 - 首页
  {
    path: "/home",
    name: "home",
    meta: {
      label: "首页",
      icon: "index"
    },
    redirect: "index",
    component: () =>
      import(/* webpackChunkName: "layoutWrap" */ "@/views/layout/LayoutWrap.vue"),
    children: [
      {
        path: "/index",
        name: "index",
        component: () =>
          import(/* webpackChunkName: "Home" */ "@/views/home/Home"),
        meta: {
          label: "首页",
        }
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
