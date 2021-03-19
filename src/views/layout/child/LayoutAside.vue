<template>
  <a-menu
    class="aside_menu"
    :open-keys="openKeys"
    :selected-keys="selectedKeys"
    mode="inline"
    theme="dark"
    @click="selectMenu"
    @openChange="openMenu"
  >
    <template v-for="item in routersList">
      <!-- 判断是否显示 -->
      <template v-if="!item.hidden">
        <!-- 这里是一级 -->
        <a-menu-item
          v-if="hasOnlyChildren(item)"
          :key="item.path"
          :class="item.path === selectedKeys ? 'ant-menu-item-selected' : ''"
        >
          <router-link :to="item.children[0].path">
            <span class="anticon">
              <svg-icon
                className="aside_svg"
                :iconName="item.meta && item.meta.icon"
              ></svg-icon>
            </span>
            <span>{{ item.children[0].meta && item.children[0].meta.label }}</span>
          </router-link>
        </a-menu-item>
        <sub-menu v-else :key="item.path" :menu-info="item" />
      </template>
    </template>
  </a-menu>
</template>

<script>
import { Menu } from "ant-design-vue";
// import { getMenuSelectKey, getMenuuOpenKey } from "@/utils/app.js";
const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <span class="anticon">
              <svg-icon
                className="aside_svg"
                :iconName="menuInfo.meta && menuInfo.meta.icon"
              ></svg-icon>
            </span>
            <span>{{ menuInfo.meta.label }}</span>
        </span>
        <template v-for="item in menuInfo.children">
        <a-menu-item v-if="!item.children" :key="item.path">
            <router-link :to="item.path">
              <span>{{ item.meta.label }}</span>
            </router-link>
          </a-menu-item>
          <sub-menu v-else :key="item.path" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
  name: "SubMenu",
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};
export default {
  nsme: "AsideIndex",
  components: {
    "sub-menu": SubMenu,
  },
  data() {
    return {
      routersList: [],
      selectedKeys: [getMenuSelectKey()] || [],
      openKeys: [getMenuuOpenKey()] || [],
    };
  },
  created() {
    this.routersList = this.$router.options.routes;
  },
  methods: {
    // 选择菜单
    selectMenu({ item, key, keyPath }) {
      this.selectedKeys = [key];
      this.$store.dispatch("app/menuSelectKey", key);
    },
    // 展开/关闭菜单
    openMenu(openKeys) {
      const latestOpenKey = openKeys.find((key) => this.openKeys.indexOf(key) === -1);
      const rootSubmenuKeys = [];
      for (let i = 0; i < this.routersList.length; i++) {
        rootSubmenuKeys.push(this.routersList[i].path);
      }
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
      this.$store.dispatch("app/menuOpenKey", openKeys);
    },
    // 检测是否只有一个子路由
    hasOnlyChildren(data) {
      // 不存在子级的情况
      if (!data.children) {
        return false;
      }
      // 过滤隐藏的子级路由
      const routers = data.children.filter((item) => (item.hidden ? false : true));
      // 判断最终结果
      if (routers.length === 1) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style lang="less" scoped>
#logo {
  padding: 24px 0 20px;
  border-bottom: 1px solid #000;
  text-align: center;
  img {
    display: inline-block;
  }
}
.aside_menu {
  i.icon {
    margin-right: 5px;
    opacity: 0.6;
  }
  .ant-menu-item-selected {
    i.icon {
      opacity: 1;
    }
  }
}
</style>
