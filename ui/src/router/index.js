import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const defaultPage = () => import("@/views/templates/DefaultPage.vue");

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/",
      name: "Default Page",
      component: defaultPage,

      children: [
        {
          path: "/",
          name: "Home",
          component: () => import("@/views/pages/Index.vue"),
          meta: {
            title: `Home - Your Boutique`,
            noAuth: true
          }
        },
        {
          path: "/shop",
          name: "Shop",
          component: () => import("@/views/pages/Shop.vue"),
          meta: {
            title: `Shop - Your Boutique`,
            noAuth: true
          }
        },
        {
          path: "/my-account",
          name: "My Account",
          component: () => import("@/views/pages/MyAccount.vue"),
          meta: {
            title: `My Account - Your Boutique`
          }
        },

        {
          path: "/cart",
          name: "Cart",
          component: () => import("@/views/pages/CartPage.vue"),
          meta: {
            title: `Cart - Your Boutique`
          }
        },

        {
          path: "/transactions",
          name: "Transactions",
          component: () => import("@/views/pages/transactions/Index.vue"),
          meta: {
            title: `Transactions - Your Boutique`
          }
        },

        {
          path: "/contact",
          name: "Contact",
          component: () => import("@/views/pages/Contact.vue"),
          meta: {
            title: `Contact - Your Boutique`
          }
        }
      ]
    },

    {
      path: "/shop",
      component: defaultPage,
      children: [
        {
          path: "single-product/:slug",
          name: "Singe Product",
          component: () => import("@/views/pages/SingleProductPage.vue"),
          meta: {
            title: `Shop - Singe Product - Your Boutique`,
            noAuth: true
          }
        }
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
          path: "/auth",
          name: "Auth",
          component: () => import("@/views/pages/Auth.vue"),
          meta: {
            noAuth: true,
            title: `Auth - Mom's Family Clinic`
          }
        },
        {
          path: "*",
          redirect: "/home"
        }
      ]
    }
  ]
});