<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-header>
      <div class="header_wrap">
        <span class="title">XXX项目</span>
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: "LayoutWrapHeader",
};
</script>
<style lang="less" scoped>
#components-layout-demo-custom-trigger {
  .header_wrap {
    padding-left: 24px;
    position: relative;
    font-family: Microsoft YaHei-Bold;
    font-size: 18px;
    letter-spacing: 1px;
    color: #fff;
  }
}
</style>
