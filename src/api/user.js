import service from "./request";

export function Login(userdata) {
    const data = userdata;
    return service.request({
        // url: "/auth/login",
        url:"https://future-calendar.zhiweidata.com/auth/login",
        method: 'post',
        data
    })
}
