<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>
<script>
import { ref } from "vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
export default {
  name: "App",
  setup() {
    const locale = ref(zhCN);
    return {
      locale,
    };
  },
};
</script>
<style lang="less"></style>
