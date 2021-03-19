<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-header>
      <div class="header_wrap">
        <span class="title">XXX项目</span>
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <span class="exit" @click="exit">退出登录</span>
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <!-- <layout-aside /> -->
      </a-layout-sider>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
    <a-layout-footer>
      <layout-footer />
    </a-layout-footer>
  </a-layout>
</template>
<script>
import LayoutAside from "./child/LayoutAside";
import LayoutFooter from "./child/LayoutFooter";
export default {
  name: "LayoutWrap",
  components: {
    LayoutAside,
    LayoutFooter,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    exit() {
      this.$store.dispatch("app/exit").then((res) => {
        this.$router.push({
          path: "/",
        });
      });
    },
  },
};
</script>
<style lang="less" scoped>
#components-layout-demo-custom-trigger {
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #2364ef;
  }
  .header_wrap {
    padding-left: 24px;
    position: relative;
    font-family: Microsoft YaHei-Bold;
    font-size: 18px;
    letter-spacing: 1px;
    color: #fff;
    .exit {
      position: absolute;
      right: 0;
      padding: 0 20px;
      cursor: pointer;
    }
  }
}
</style>
