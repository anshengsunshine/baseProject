import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// svg 全局组件
import SvgIcon from "@/components/svgIcon/Index";
// 路由守卫
// import "./router/premit";
// 引入ant-design-vue
import {
    Button, Layout,
    Menu, Empty,Dropdown
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

import "@/assets/style/main.less";

createApp(App).use(store).use(router)
    .use(Button).use(Layout)
    .use(Empty).use(Menu).use(Dropdown)
    .component('svg-icon', SvgIcon).mount("#app");


