import {
    Login
} from "@/api/user";
import {
    setToken,
    setUsername,
    getUsername,
    removeToken,
    removeUsername,
    setMenuSelectKey,
    removeMenuSelectKey,
    setMenuuOpenKey,
    removeMenuuOpenKey
} from "@/utils/app"

const state = {
    to_ken: '',
    username: getUsername() || '',
    menu_selectedKey: '',
    menu_openKey: [],
}

const mutations = {
    SET_TOKEN(state, value) {
        state.to_ken = value
    },
    SET_USERNAME(state, value) {
        state.username = value
    },
    SET_MENU_SELECTEDKEYS(state, value) {
        state.menu_selectedKey = value
    },
    SET_MENU_OPENKEYS(state, value) {
        state.menu_openKey = value
    },
}

const actions = {
    login(content, requestData) {
        return new Promise((resolve, reject) => {
            // Login(requestData).then(res => {
            //     let data = res.data;
            //     content.commit('SET_TOKEN', "Bearer " + data.jwtToken)
            //     // content.commit('SET_USERNAME', data.username)
            //     setToken("Bearer " + data.jwtToken)
            //     // setUsername(data.username)
            //     resolve(res)
            // }).catch(err => {
            //     reject(err)
            // })
        })
    },
    exit({
        commit
    }) {
        return new Promise((reslove) => {
            removeToken()
            removeUsername()
            removeMenuSelectKey()
            removeMenuuOpenKey()
            commit('SET_TOKEN', '')
            commit('SET_USERNAME', '')
            commit('SET_MENU_SELECTEDKEYS', '')
            commit('SET_MENU_OPENKEYS', [])
            reslove()
        })
    },
    menuSelectKey(content, val) {
        content.commit('SET_MENU_SELECTEDKEYS', val)
        setMenuSelectKey(val)
    },
    menuOpenKey(content,val){
        content.commit('SET_MENU_OPENKEYS',val)
        setMenuuOpenKey(val)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
};