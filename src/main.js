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
    Button, Layout, Input, Col, Row, Steps,
    Menu, Empty, Dropdown, Form
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

import "@/assets/style/main.less";

createApp(App).use(store).use(router).use(Form)
    .use(Button).use(Layout).use(Input).use(Col)
    .use(Empty).use(Menu).use(Dropdown).use(Row)
    .use(Steps)
    .component('svg-icon', SvgIcon).mount("#app");


