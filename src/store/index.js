import { createStore } from "vuex";
import app from "./modules/app";
import login from "./modules/login";
import router from "./modules/router";

export default createStore({
  modules: {
    app,
    login,
    router
  }
});
