<template>
  <div class="header_right_wrap">
    <a-dropdown>
      <div class="user_wrap" @click="(e) => e.preventDefault()">
        <span class="font_fSY_R">username</span>
        <svg-icon className="user_svg" iconName="user" />
      </div>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <a @click="exit">退出</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import SvgIcon from "@/components/svgIcon/Index";
export default {
  name: "LayoutHeader",
  components: {
    SvgIcon,
  },
  setup() {
    // 定义数据
    const data = reactive({
      isSearchPage: true,
    });

    // 获取当前路由
    const router = useRouter();
    const getCurrentRoute = (bool) => {
      data.isSearchPage = bool;
    };

    //或取 vuex 状态管理 --- 从 store 中获取 username ，调用退出方法
    const store = useStore();
    const username = store.state.app.username;
    const exit = () => {
      store.dispatch("app/exit").then((res) => {
        router.push({
          path: "/",
        });
      });
    };

    return {
      username,
      data,
      getCurrentRoute,
      exit,
    };
  },
};
</script>

<style lang="less" scoped>
.header_right_wrap {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
  .user_svg {
    width: 27px;
    height: 27px;
    color: #0fb1e6;
  }

  .user_wrap {
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 100%;
    cursor: pointer;
    .user_svg {
      margin-left: 10px;
    }
    span {
      font-size: 16px;
      line-height: 1;
      letter-spacing: 0px;
    }
  }
  .user_wrap:hover {
    background-color: #f0f2f58f;
  }
}

@keyframes huanman {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
