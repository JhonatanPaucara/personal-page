import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

import Home from "../views/Home";
import Studies from "../views/Studies";
import Experience from "../views/Experience";

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
  }
];

export default new VueRouter({
  routes: routes
});
