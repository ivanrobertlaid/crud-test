import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);


// const Error404 = () => import("@/views/Error404");

export default new Router({
  mode: "hash", // Demo is living in GitHub.io, so required!
  linkActiveClass: "open active",
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: "/",
      redirect: "/dashboard",
      name: "Home",
      component: DefaultContainer,
      children: [{
          path: "dashboard",
          name: "Dashboard",
          component: Dashboard
        },
        {
          path: "purchase-order",
          name: "PurchaseOrder",
          component: PurchaseOrder
        },
        {
          path: "inventory",
          name: "Inventory",
          component: Inventory
        },
        {
          path: "rma",
          name: "RMA",
          component: RMA
        },
        {
          path: "incoming",
          name: "Incoming",
          component: Incoming
        },
        {
          path: "vendor",
          name: "Vendor",
          component: Vendor
        },
        {
          path: "account",
          name: "Account",
          component: Account
        },
        {
          path: "qb",
          name: "QuickBook",
          component: QuickBook
        },
        {
          path: "customer",
          name: "Customer",
          component: Customer
        },
        {
          path: "fba",
          name: "FBA",
          component: FBA
        },
        {
          path: "accounts-payable",
          name: "Accounts Payables",
          component: AccountsPayable
        },
        {
          path: 'outgoing',
          name: 'Outgoing',
          component: Outgoing
        },
      ]
    },
    {
      path: "/qb",
      redirect: "/qb",
      component: DefaultContainer
    },
    {
      path: "/rma",
      component: DefaultContainer,
      children: [{
        path: "view/:id",
        name: "View RMA",
        component: ViewRMA
      }]
    },
    {
      path: "/incoming",
      component: DefaultContainer,
      children: [{
          path: "view/:id",
          name: "View Incoming",
          component: ViewIncoming
        },
        {
          path: "serials/:id",
          name: "View Serials",
          component: ViewSerials
        }
      ]
    },
    {
      path: "/purchase-order",
      redirect: "/purchase-order",
      component: DefaultContainer,
      children: [{
          path: "create",
          name: "CreatePurchaseOrder",
          component: CreatePurchaseOrder
        },
        {
          path: "view/:id",
          name: "View Purchase Order",
          component: ViewPurchaseOrder
        },
        {
          path: "edit/:id",
          name: "EditPurchaseOrder",
          component: EditPurchaseOrder
        }
      ]
    },
    {
      path: "/account",
      component: DefaultContainer,
      meta: {
        label: "Account"
      },
      children: [{
          path: "create-account",
          name: "Create Account",
          component: CreateAccount
        },
        {
          path: "view-account/:id",
          name: "View Account",
          component: ViewAccount
        },
        {
          path: "edit-account/:id",
          name: "Edit Account",
          component: EditAccount
        }
      ]
    },
    {
      path: "/inventory",
      component: DefaultContainer,
      meta: {
        label: "Inventory"
      },
      children: [{
        path: "product/:id",
        name: "Product Information",
        component: ViewProduct
      }]
    },
    {
      path: "/customer",
      component: DefaultContainer,
      meta: {
        label: "Customer"
      },
      children: [{
          path: "create-customer",
          name: "Create Customer",
          component: CreateCustomer
        },
        {
          path: "edit-customer/:id",
          name: "Edit Customer",
          component: EditCustomer
        },
        {
          path: "view-customer/:id",
          name: "View Customer",
          component: ViewCustomer
        }
      ]
    },
    {
      path: "/vendor",
      component: DefaultContainer,
      meta: {
        label: "Vendor"
      },
      children: [{
          path: "create-vendor",
          name: "Create Vendor",
          component: CreateVendor
        },
        {
          path: "view-vendor/:id",
          name: "View Vendor",
          component: ViewVendor
        },
        {
          path: "edit-vendor/:id",
          name: "Edit Vendor",
          component: EditVendor
        }
      ]
    },
    // {
    //   path: '/outgoing',
    //   component: DefaultContainer,
    //   meta: {
    //     label: 'Outgoing'
    //   },
    //   children: [
    //     // {
    //     //   path:'/create',
    //     //   component:Outgoing
    //     // }
    //   ]
    // },
    {
      path: "/fba",
      component: DefaultContainer,
      children: [{
          path: "create-fba",
          name: "Replenish FBA",
          component: CreateFBA
        },
        {
          path: "view/:id",
          name: "View FBA",
          component: ViewFBA
        }
      ]
    },
    {
      path: "/accounts-payable",
      component: DefaultContainer,
      children: [{
        path: 'view/:id',
        name: 'View AP',
        component: ViewAP
      }]
    },
    {
      path: "/",
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: [{
          path: "login",
          name: "Login",
          component: Login,
          meta: {
            noAuth: true
          }
        },
        {
          path: "register",
          name: "Register",
          component: Register,
          meta: {
            noAuth: true
          }
        },
        {
          path: "*",
          component: Error404,
          meta: {
            noAuth: true
          }
        }
      ]
    }
  ]
});
