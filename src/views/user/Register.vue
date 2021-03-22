<template>
  <div class="user_wrap">
    <div class="userform_txt_wrap">
      <p class="user_txt font_fSY_M">注册</p>
      <register-form />
    </div>
  </div>
</template>

<script>
import RegisterForm from "./child/RegisterForm";

export default {
  name: "Register",
  components: {
    RegisterForm,
  },
};
</script>

<style lang="less" scoped>
.user_wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #1890ff6b;
  .userform_txt_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    width: 442px;
    border-radius: 10px;
    // opacity: 0.62;
    background-color: #fff;
    box-shadow: 0px 0px 24px 0px rgba(14, 87, 167, 0.29);

    .user_txt {
      font-size: 35px;
      line-height: 39px;
      letter-spacing: 0px;
      color: #00c0ff;
      -webkit-box-reflect: below -0.3em -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(rgba(0, 0, 0, 0)),
          to(rgba(255, 255, 255, 0.2))
        );
    }
  }
}
</style>
