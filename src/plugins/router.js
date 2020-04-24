import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

import Home from "../views/Home";
import Studies from "../views/Studies";
import Experience from "../views/Experience";
import Investigation from "../views/Investigation";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/studies",
    component: Studies
  },
  {
    path: "/experience",
    component: Experience
  },
  {
    path: "/investigation",
    component: Investigation
  }
];

export default new VueRouter({
  routes: routes,
  mode:'history'
});
