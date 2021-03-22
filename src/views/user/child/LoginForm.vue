<template>
  <a-form
    class="from_wrap"
    name="custom-validation"
    ref="ruleForm"
    :model="formData"
    :rules="form_rules"
    @finish="submit"
  >
    <a-form-item class="form_item" required name="username">
      <a-input
        type="text"
        placeholder="请输入用户名"
        autocomplete="off"
        v-model:value="formData.username"
      />
    </a-form-item>

    <a-form-item class="form_item" required name="password">
      <a-input-password
        placeholder="请输入密码"
        autocomplete="off"
        v-model:value="formData.password"
      />
    </a-form-item>

    <a-form-item class="form_item">
      <a-button type="primary" html-type="submit">登录</a-button>
    </a-form-item>
    <a-form-item class="form_item">
      <router-link to="register" class="to_register">去注册</router-link> | 
      <router-link to="forget" class="to_register">忘记密码</router-link>
    </a-form-item>
  </a-form>
</template>

<script>
import { onMounted, toRefs, reactive, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Login } from "@/api/user"; // 导入api
import { checkPassword as password } from "@/utils/varification";
import { message } from "ant-design-vue";
import { formComposition } from "./composition";
export default {
  name: "LoginForm",
  setup(props, { root }) {
    const { formComData } = formComposition();

    // 获取 vuex 状态管理  --- 路由
    const store = useStore();
    const router = useRouter();

    const submit = () => {
      const requestData = {
        username: formConfig.formData.username,
        password: formConfig.formData.password,
      };
      store.dispatch("app/login", requestData).then((res) => {
        if (res.data.code === 203) {
          router.push({
            path: "/keynote",
          });
          store.dispatch("app/menu", "/keynote");
        } else {
          message.error(res.data.message, 1);
        }
      });
    };

    return {
      ...toRefs(formComData),
      submit,
    };
  },
};
</script>

<style lang="less" scoped>
.from_wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 70%;
  text-align: left;
  color: #fff;
  .form_item {
    margin-bottom: 10px;
    width: 100%;
    height: 60px;
    .to_register {
      margin: 0 10px;
      font-size: 14px;
    }
  }
}
</style>
