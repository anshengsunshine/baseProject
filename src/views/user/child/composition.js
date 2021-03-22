import { reactive } from "vue";
import {
    checkPassword as password,
    checkPhone as phone,
    checkCode as code,
} from "@/utils/varification";
import { message } from "ant-design-vue";

//登录、 注册的表单公共部分抽离
const formComposition = () => {
    /**
     * 验证-用户名的关键词
     */
    let checkUsername = async (rule, value, callback) => {
        if (!value) {
            return Promise.reject("请输入用户名"); // 校验为空
        } else {
            return Promise.resolve();
        }
    };
    /**
     * 验证-密码
     */
    let checkPassword = async (rule, value, callback) => {
        const passwords = formComData.formData.passwords;
        if (!value) {
            return Promise.reject("请输入密码"); // 校验为空
        } else if (!password(value)) {
            return Promise.reject("请设置6-20位含数字、字母的密码");
        } else if (passwords && value && passwords !== value) {
            // 必须是两个密码都存在的情况下，在检验两个密码是否一致
            return Promise.reject("两次密码不一致");
        } else {
            return Promise.resolve();
        }
    };
    /**
     * 验证-重复校验-密码
     */
    let checkPasswords = async (rule, value, callback) => {
        const pas = formComData.formData.password;
        if (!value) {
            return Promise.reject("请再次输入密码"); // 校验为空
        } else if (!password(value)) {
            return Promise.reject("请再次输入密码");
        } else if (pas && value && pas !== value) {
            // 必须是两个密码都存在的情况下，在检验两个密码是否一致
            return Promise.reject("两次密码不一致");
        } else {
            return Promise.resolve();
        }
    };
    /**
     * 验证-手机号
     */
    let checkMobile = async (rule, value, callback) => {
        if (!value) {
            return Promise.reject("请输入手机号"); // 校验为空
        } else if (!phone(value)) {
            // 手机号输入有误
            return Promise.reject("请输入11位数字的手机号");
        } else {
            return Promise.resolve();
        }
    };
    /**
     * 验证-验证码
     */
    let checkCode = async (rule, value, callback) => {
        if (!value) {
            return Promise.reject("请输入验证码"); // 校验为空
        } else if (!code(value)) {
            return Promise.reject("请输入6位的数字+英文");
        } else {
            return Promise.resolve();
        }
    };
    const formComData = reactive({
        formData: {
            username: "",
            password: "",
            passwords: "",
            mobile: "",
            code: "",
        },
        form_rules: {
            username: [{ validator: checkUsername, trigger: "change" }],
            password: [{ validator: checkPassword, trigger: "change" }],
            passwords: [{ validator: checkPasswords, trigger: "change" }],
            mobile: [{ validator: checkMobile, trigger: "change" }],
            code: [{ validator: checkCode, trigger: "change" }],
        },
        // 获取验证码的按钮 - 文本、loading等待、disabled不可点击、sec倒计时
        btn_text: "获取验证码",
        btn_loading: false,
        btn_disabled: false,
        sec: 5,
        // 定义定时器
        timer: null,
    })

    /**
    * 获取验证码
    */
    const getCode = () => {
        // 用户名不存在的情况
        if (!formComData.formData.mobile) {
            message.error("手机号不能为空");
            return false;
        }
        // 优先判断定时器是否存在，存在则先清除后开启
        if (formComData.timer) {
            clearInterval(formComData.timer);
        }
        // 开启定时器
        formComData.sec = 5;
        formComData.timer = setInterval(() => {
            const s = formComData.sec--;
            formComData.btn_text = `${s}秒`;
            formComData.btn_disabled = true;
            if (s <= 0) {
                clearInterval(formComData.timer);
                formComData.btn_text = `重新获取`;
                formComData.btn_disabled = false;
            }
        }, 1000);
    };

    return {
        formComData,
        getCode
    }
}

export { formComposition }
