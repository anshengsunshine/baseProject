<template>
  <svg class="svg_calss" :class="className">
    <use :href="'#icon-' + iconName"></use>
  </svg>
</template>
<script>
export default {
  name: "SvgIcon",
  props: {
    iconName: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
  },
  setup() {
    // 获取指定目录下，所有为 .svg 结尾的文件
    const req = require.context("@/assets/svg", false, /\.svg$/);
    // 解析获取的 .svg 文件的文件名称，并返回
    const requireAll = (requireContext) => {
      return requireContext.keys().map(requireContext);
    };
    requireAll(req);
  },
};
</script>
<style lang="less" scoped>
.svg_calss {
  width: 1.5em;
  height: 1.5em;
  fill: currentColor;
}
</style>
