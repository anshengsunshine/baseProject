import { createRouter, createWebHistory } from "vue-router";

const routes = [{
  path: '/',
  redirect: '/login'
},
{
  path: '/login',
  name: 'login',
  component: () =>
    import(/* webpackChunkName: "Login" */ "@/views/user/Login"),
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router
