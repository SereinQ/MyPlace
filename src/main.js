import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";
import "@/plugins/global-components";
import "@/assets/styles/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
