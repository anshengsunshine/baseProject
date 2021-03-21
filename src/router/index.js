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
  // 首页
  {
    path: "/home",
    name: "home",
    meta: {
      label: "1-0",
      icon: "index"
    },
    component: () =>
      import(/* webpackChunkName: "layoutWrap" */ "@/views/layout/LayoutWrap.vue"),
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "index",
        component: () =>
          import(/* webpackChunkName: "Index" */ "@/views/home/Home"),
        meta: {
          label: "1-1",
        }
      },
      {
        path: "/two22",
        name: "two22",
        component: () =>
          import(/* webpackChunkName: "Home" */ "@/views/home/Home"),
        meta: {
          label: "1-2",
        },
        children: [
          {
            path: "/three3",
            name: "three3",
            component: () =>
              import(/* webpackChunkName: "Home" */ "@/views/home/Home"),
            meta: {
              label: "1-2-1",
            },
          }
        ]
      },
    ]
  },
  {
    path: "/first2",
    name: "First2",
    meta: {
      label: "2-0",
      icon: "index"
    },
    component: () =>
      import(/* webpackChunkName: "layoutWrap" */ "@/views/layout/LayoutWrap.vue"),
    children: [
      {
        path: "/three3",
        name: "three3",
        component: () =>
          import(/* webpackChunkName: "Home" */ "@/views/home/Home"),
        meta: {
          label: "2-1",
        },
      },
      {
        path: "/three32",
        name: "three32",
        component: () =>
          import(/* webpackChunkName: "Home" */ "@/views/home/Home"),
        meta: {
          label: "2-2",
        },
        children:[
          {
            path: "/three3",
            name: "three3",
            component: () =>
              import(/* webpackChunkName: "Home" */ "@/views/home/Home"),
            meta: {
              label: "2-1-1",
            },
          }
        ]
      }
    ]
  },
  {
    path: "/first3",
    name: "First3",
    meta: {
      label: "3-0",
      icon: "index"
    },
    component: () =>
      import(/* webpackChunkName: "layoutWrap" */ "@/views/layout/LayoutWrap.vue"),
    children: [
      {
        path: "/three34",
        name: "three34",
        component: () =>
          import(/* webpackChunkName: "Home" */ "@/views/home/Home"),
        meta: {
          label: "3-1",
        },
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
