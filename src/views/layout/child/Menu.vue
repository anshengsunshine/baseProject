<template>
  <a-sub-menu :key="menu.path">
    <template #title>
      <span>
        <span class="anticon">
          <svg-icon
            className="aside_svg"
            :iconName="menu.meta && menu.meta.icon"
          ></svg-icon>
        </span>
        <span>{{ menu.meta && menu.meta.label }}</span>
      </span>
    </template>

    <template v-if="menu.children.length">
      <template v-for="item in menu.children">
        <template v-if="!item.hidden">
          <!--不存在子级的栏目-->
          <a-menu-item v-if="!item.children" :key="item.path">
            <router-link :to="item.path">
              {{ item.meta && item.meta.label }}
            </router-link>
          </a-menu-item>
          <!--存在子级栏目-->
          <Menu v-else :menu="item" />
        </template>
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: "Menu",
  props: {
    menu: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {},
};
</script>

<style lang="less" scoped>
.aside_menu {
  i.icon {
    margin-right: 5px;
    opacity: 0.6;
  }
  .ant-menu-submenu-open {
    > div {
      i.icon {
        opacity: 1;
      }
    }
  }
}
</style>
