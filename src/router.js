import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Event from "./views/Event.vue";
import Carrier from "./views/Carrier.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  base: process.env.BASE_URL || "",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/event",
      name: "event",
      component: Event
    },
    {
      path: "/kariera",
      name: "kariera",
      component: Carrier
    },
    {
      path: "/hello",
      name: "hello",
      component: About
    }
  ]
});
