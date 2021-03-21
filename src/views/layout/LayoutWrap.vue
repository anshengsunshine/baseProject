<template>
  <a-layout id="layout_wrap">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <layout-aside />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layput_header_wrap">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <layout-header />
      </a-layout-header>
      <layout-content class="layout_content_wrap" />
      <a-layout-footer>
        <layout-footer class="layout_footer_wrap" />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import LayoutHeader from "./child/Header";
import LayoutFooter from "./child/Footer";
import LayoutAside from "./child/Aside";
import LayoutContent from "./child/Content";
export default {
  name: "LayoutWrap",
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LayoutHeader,
    LayoutFooter,
    LayoutAside,
    LayoutContent,
  },

  setup() {
    return {
      selectedKeys: ref(["1"]),
      collapsed: ref(false),
    };
  },
};
</script>
<style lang="less" scoped>
#layout_wrap {
  .layput_header_wrap {
    padding:0;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    background: #fff;
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #1890ff;
  }
  .layout_content_wrap {
    margin: 0 auto;
    padding-top: 26px;
    width: 1200px;
    min-width: 1200px;
    height: 100%;
    min-height: 80vh;
  }
}
</style>
