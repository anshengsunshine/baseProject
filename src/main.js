import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// svg 全局组件
import SvgIcon from "@/components/svgIcon/Index";
// 引入ant-design-vue
import {
    Button, Layout,
    Menu, Icon, Empty
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

createApp(App).use(store).use(router)
    .use(Button).use(Layout)
    .use(Icon).use(Empty).use(Menu)
    .component('svg-icon', SvgIcon).mount("#app");


