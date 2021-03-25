import { Login } from "@/api/user"
import { Promise } from "core-js"
import router from '@/router/index'
import { useStore } from "vuex";
const store = useStore();
const state = {
    userInfo: {
        uuid: "",
        nickName: "",
        headerImg: "",
        authority: "",
    },
    token: "",
}

const getters = {
}

const mutations = {
    setUserInfo(state, userInfo) {
        // 这里的 `state` 对象是模块的局部状态
        state.userInfo = userInfo
    },
    setToken(state, token) {
        // 这里的 `state` 对象是模块的局部状态
        state.token = token
    },
    LoginOut(state) {
        state.userInfo = {}
        state.token = ""
        sessionStorage.clear()
        router.push({ name: 'login', replace: true })
        window.location.reload()
    },
    ResetUserInfo(state, userInfo = {}) {
        state.userInfo = {
            ...state.userInfo,
            ...userInfo
        }
    }
}

const actions = {
    // login(content, requestData) {
    //     return new Promise((resolve, reject) => {
    //         Login(requestData).then(res => {
    //             resolve(res)
    //         }).catch(err => {
    //             reject(err)
    //         })
    //     })
    // }

    LoginIn({ commit, dispatch, rootGetters, getters }, loginInfo) {
        console.log("loginInfo----",loginInfo)
        return new Promise(() => {
            // Login(loginInfo).then(res => {
            //     if (res.code == 0) {
            //         commit('setUserInfo', res.data.user)
            //         commit('setToken', res.data.token)
            //         store.dispatch('router/SetAsyncRouter', {}, { root: true })
            //         const asyncRouters = rootGetters['router/asyncRouters']
            //         asyncRouters.map(asyncRouter => {
            //             router.addRoute(asyncRouter)
            //         })
            //         // const redirect = router.currentRoute._value.query.redirect
            //         // if (redirect) {
            //         //     router.push({ path: redirect })
            //         // } else {
            //         router.push({ name: getters["userInfo"].authority.defaultRouter })
            //         // }
            //         return true
            //     }
            // })

        })
    },



}

export default {
    namespaced: true,
    getters,
    state,
    mutations,
    actions
};
