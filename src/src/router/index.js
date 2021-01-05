import Vue from "vue";
import VueRouter from "vue-router";
import AppContainer from "../components/AppContainer";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "App",
    component: AppContainer,
  },
  {
    path: "/first-page",
    name: "App",
    component: AppContainer,
  },
];

const router = new VueRouter({
  routes,
});

export default router;