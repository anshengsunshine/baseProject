<template>
  <div class="footer">
    <div class="left_aside"></div>
    <div class="copyright">
      Copyright
      <a-icon type="copyright" /> 2021 <span>XXXXXXXXXXXXXXX</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalFooter",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.footer {
  padding: 0;
  text-align: center;
  display: flex;
  align-items: center;
  width: 100%;
  .left_aside {
    max-width: 200px;
    min-width: 200px;
    width: 200px;
    height: 29px;
    background-color: #283140f5;
  }
  .copyright {
    width: 100%;
    text-align: center;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
}
</style>
