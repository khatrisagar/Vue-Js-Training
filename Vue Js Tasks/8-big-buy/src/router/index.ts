import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// auth
import authLogin from "@/pages/auth/auth-login.page.vue";
import authSignUp from "@/pages/auth/auth-sign-up.page.vue";

// item
import itemForm from "@/pages/item/item-form.page.vue";
import viewItem from "@/pages/item/view-item.page.vue";
import buyItem from "@/pages/item/buy-item.page.vue";
import purchaseHistory from "@/pages/item/purchase-history.page.vue";
// common
import pageNotFound from "@/pages/common/page-not-found.page.vue";

// nav gauards
import {
  isUserAuthenticated,
  isUserNotAuthenticated,
} from "@/router/route-gaurds/auth.route";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: { name: "viewItem" },
  },
  {
    path: "/buy-item",
    name: "buyItem",
    component: buyItem,
    beforeEnter: isUserAuthenticated,
  },
  {
    path: "/view-item",
    name: "viewItem",
    component: viewItem,
    beforeEnter: isUserAuthenticated,
  },
  {
    path: "/create-item",
    name: "createItem",
    component: itemForm,
    beforeEnter: isUserAuthenticated,
  },
  {
    path: "/purchase-history",
    name: "purchaseHistroy",
    component: purchaseHistory,
    beforeEnter: isUserAuthenticated,
  },
  {
    path: "/edit-item/:itemId",
    name: "editItem",
    component: itemForm,
    beforeEnter: isUserAuthenticated,
  },
  {
    path: "/auth/login",
    name: "authLogin",
    component: authLogin,
    beforeEnter: isUserNotAuthenticated,
  },
  {
    path: "/auth/sign-up",
    name: "authSignUp",
    component: authSignUp,
    beforeEnter: isUserNotAuthenticated,
  },
  {
    name: "pageNotFound",
    path: "/:pageNotFound(.*)*",
    redirect: { name: "404" },
  },
  {
    name: "404",
    path: "/404",
    component: pageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
