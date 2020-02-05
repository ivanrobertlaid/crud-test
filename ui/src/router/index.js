import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const defaultContainer = () => import("@/views/layouts/DefaultContainer.vue");

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/",
      name: "Default Page",
      component: defaultContainer,

      children: [
        {
          path: "/",
          name: "Home",
          component: () => import("@/views/pages/Index.vue"),
          meta: {
            title: `Home`,
          }
        },
      ]
    },
    {
      path: "/",
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: [
        {
          path: "*",
          redirect: "/home"
        }
      ]
    }
  ]
});