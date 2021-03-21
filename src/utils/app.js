import cookie from "cookie_js"

const adminToken = "admin_toKen"
const usernameKey = "username"
const menuSelectKey = "menuSelectKey"
const menuOpenKeys = "menuOpenKeys"

export function getToken() {
    return cookie.get(adminToken)
}

export function setToken(toKen) {
    return cookie.set(adminToken, toKen)
}

export function removeToken() {
    return cookie.remove(adminToken)
}

export function setUsername(value) {
    return cookie.set(usernameKey, value)
}

export function getUsername() {
    return cookie.get(usernameKey)
}

export function removeUsername() {
    return cookie.remove(usernameKey)
}

export function setMenuSelectKey(value) {
    return cookie.set(menuSelectKey, value)
}

export function getMenuSelectKey() {
    return cookie.get(menuSelectKey)
}

export function removeMenuSelectKey() {
    return cookie.remove(menuSelectKey)
}

export function setMenuuOpenKey(value) {
    return cookie.set(menuOpenKeys, value)
}

export function getMenuuOpenKey() {
    return cookie.get(menuOpenKeys)
}

export function removeMenuuOpenKey() {
    return cookie.remove(menuOpenKeys)
}