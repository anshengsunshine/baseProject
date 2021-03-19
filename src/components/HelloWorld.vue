<template>
  <svg-icon className="user_svg" iconName="user" />
</template>

<script>
import SvgIcon from "@/components/svgIcon/Index";
export default {
  name: "HelloWorld",
  components: {
    SvgIcon,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.user_svg {
  color: #42b983;
}
</style>
