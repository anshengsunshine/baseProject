<template>
  <div class="user_wrap">
    <div class="userform_txt_wrap">
      <p class="user_txt font_fSY_M">忘记密码</p>
      <div>
        <a-steps :current="current">
          <a-step v-for="item in steps" :key="item.title" :title="item.title" />
        </a-steps>
        <div class="steps-content">
          {{ steps[current].content }}
        </div>
        <div class="steps-action">
          <a-button v-if="current < steps.length - 1" type="primary" @click="next"
            >Next</a-button
          >
          <a-button
            v-if="current == steps.length - 1"
            type="primary"
            @click="$message.success('Processing complete!')"
          >
            Done
          </a-button>
          <a-button v-if="current > 0" style="margin-left: 8px" @click="prev"
            >Previous</a-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const current = ref(0);

    const next = () => {
      current.value++;
    };

    const prev = () => {
      current.value--;
    };

    return {
      current,
      steps: [
        {
          title: "First",
          content: "First-content",
        },
        {
          title: "Second",
          content: "Second-content",
        },
        {
          title: "Last",
          content: "Last-content",
        },
      ],
      next,
      prev,
    };
  },
});
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
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
</style>
