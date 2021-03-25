import { Login } from "@/api/user"
import { Promise } from "core-js"

const state = {
}

const getters = {
}

const mutations = {
}

const actions = {
    login(content, requestData) {
        return new Promise((resolve, reject) => {
            Login(requestData).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

export default {
    getters,
    state,
    mutations,
    actions
};
