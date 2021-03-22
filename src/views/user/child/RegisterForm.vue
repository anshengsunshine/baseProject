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
    <a-form-item class="form_item" required name="passwords">
      <a-input-password
        placeholder="请再次输入密码"
        autocomplete="off"
        v-model:value="formData.passwords"
      />
    </a-form-item>

    <a-form-item class="form_item" required name="mobile">
      <a-input
        type="text"
        placeholder="请输入手机号"
        autocomplete="off"
        v-model:value="formData.mobile"
      />
    </a-form-item>
    <a-form-item class="form_item" name="code">
      <a-row :gutter="15">
        <a-col :span="14">
          <a-input
            :maxlength="6"
            placeholder="请输入验证码"
            v-model:value="formData.code"
            type="text"
            autocomplete="off"
          />
        </a-col>
        <a-col :span="10">
          <a-button
            @click="getCode"
            type="primary"
            block
            :loading="btn_loading"
            :disabled="btn_disabled"
            >{{ btn_text }}</a-button
          >
        </a-col>
      </a-row>
    </a-form-item>

    <a-form-item class="form_item">
      <a-button type="primary" html-type="submit">登录</a-button>
    </a-form-item>
    <a-form-item class="form_item">
      <router-link to="/" class="to_register">去登录</router-link> |
      <router-link to="forget" class="to_register">忘记密码</router-link>
    </a-form-item>
  </a-form>
</template>

<script>
import { onMounted, reactive, getCurrentInstance, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Login } from "@/api/user"; // 导入api
import { message } from "ant-design-vue";
import { formComposition } from "./composition";
export default {
  name: "LoginForm",
  setup(props, { root }) {
    const { formComData, getCode } = formComposition();

    // 获取 vuex 状态管理  --- 路由
    const store = useStore();
    const router = useRouter();

    const submit = () => {
      const requestData = {
        username: formComData.formData.username,
        password: formComData.formData.password,
      };
      store.dispatch("app/login", requestData).then((res) => {
        if (res.data.code === 203) {
          router.push({
            path: "/index",
          });
          store.dispatch("app/menu", "/index");
        } else {
          message.error(res.data.message, 1);
        }
      });
    };

    return {
      ...toRefs(formComData),
      submit,
      getCode,
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
