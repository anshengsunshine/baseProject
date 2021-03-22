/**
 * 手机号-验证
 * @param {*} value 手机号
*/
export function checkPhone(value) {
    let regPhong = /^1[3456789]\d{9}$/;
    return regPhong.test(value)
}
/**
 * 密码-验证  
 * 6 - 20 数字 + 英文
 * @param {*} value 密码
*/
export function checkPassword(value) {
    let regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    return regPassword.test(value)
}
/**
 * 验证码-验证  
 * 
 * @param {*} value 验证码
*/
export function checkCode(value){
    let regCode = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6}$/;
    return regCode.test(value)
}