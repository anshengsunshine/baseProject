import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
// svg 全局组件
import SvgIcon from "@/components/svgIcon/Index";
// 路由守卫
// import "./router/premit";
// 引入ant-design-vue
import {
    ConfigProvider, Button, Layout, Input, Col, Row, Steps, Table, Divider,
    Menu, Empty, Dropdown, Form, Popconfirm, Drawer, Tabs, Tree,
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

import "@/assets/style/main.less";


const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(store).use(router)
    .use(ConfigProvider).use(Form).use(Drawer)
    .use(Button).use(Layout).use(Input).use(Col)
    .use(Empty).use(Menu).use(Dropdown).use(Row)
    .use(Table).use(Steps).use(Divider).use(Popconfirm)
    .use(Tabs).use(Tree)
    .use(axios)
    .component('svg-icon', SvgIcon).mount("#app");


