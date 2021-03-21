import router from "./index.js";
import store from "@/store/index";
import {
    getToken,
    removeToken,
    removeUsername
} from "@/utils/app.js"

const whiteRouter = ['/'];

// 路由守卫
router.beforeEach((to, from, next) => {
    if (getToken()) {
        if (to.path === "/") {
            removeToken();
            removeUsername();
            store.commit('app/SET_TOKEN', '')
            store.commit('app/SET_USERNAME', '')
            next();
        } else {
            next();
        }
    } else {
        if (whiteRouter.indexOf(to.path) !== -1) {
            next();
        } else {
            next("/");
        }
    }
})