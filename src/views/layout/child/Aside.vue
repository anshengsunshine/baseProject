<template>
  <a-menu
    class="aside_menu"
    v-model:openKeys="data.openKeys"
    v-model:selectedKeys="data.selectedKeys"
    mode="inline"
    theme="dark"
    @click="selectMenu"
    @openChange="openMenu"
  >
    <template v-for="item in routers">
      <!-- 判断是否显示 -->
      <template v-if="!item.hidden">
        <!-- 这里是一级 -->
        <a-menu-item v-if="hasOnlyChildren(item)" :key="item.path">
          <router-link class="menu_item" :to="item.children[0].path">
            <span class="anticon">
              <svg-icon
                className="aside_svg"
                :iconName="item.meta && item.meta.icon"
              ></svg-icon>
            </span>
            <span>{{ item.children[0].meta && item.children[0].meta.label }}</span>
          </router-link>
        </a-menu-item>

        <!-- 这里是子级 -->
        <Menu :menu="item" v-else :key="item.path" />
      </template>
    </template>
  </a-menu>
</template>

<script>
import { reactive } from "vue";
import { useRouter, onBeforeRouteUpdate } from "vue-router";
import Menu from "./Menu";
import { useStore } from "vuex";
import { getMenuSelectKey, getMenuuOpenKey } from "@/utils/app.js";
export default {
  nsme: "Aside",
  components: {
    Menu,
  },
  emits: ["getCurrentRoute"],
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    // 路由
    const { options } = useRouter();
    const routers = options.routes;
    console.log(routers);

    // 获取 vuex 对象
    const store = useStore();

    // 定义数据
    const data = reactive({
      selectedKeys: [getMenuSelectKey()] || [],
      openKeys: [getMenuuOpenKey()] || [],
    });

    // 路由更新
    onBeforeRouteUpdate((to) => {
      data.selectedKeys = [to.path];
      if (to.path === "/searchEv") {
        context.emit("getCurrentRoute", false);
      } else {
        context.emit("getCurrentRoute", true);
      }
      store.dispatch("app/menu", to.path);
    });

    // 定义方法
    // 选择菜单
    const selectMenu = ({ item, key, keyPath }) => {
      data.selectedKeys = [key];
      store.dispatch("app/menuSelectKey", key);
    };
    // 展开/关闭菜单
    const openMenu = (openKeys) => {
      const latestOpenKey = openKeys.find((key) => data.openKeys.indexOf(key) === -1);
      const rootSubmenuKeys = [];
      for (let i = 0; i < routers.length; i++) {
        rootSubmenuKeys.push(routers[i].path);
      }
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        data.openKeys = openKeys;
      } else {
        data.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
      store.dispatch("app/menuOpenKey", openKeys);
    };

    // 检测是否只有一个子路由
    const hasOnlyChildren = (data) => {
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
    };

    return {
      data,
      routers,
      selectMenu,
      openMenu,
      hasOnlyChildren,
    };
  },
};
</script>
