import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// auth
import authLogin from "@/pages/auth/auth-login.page.vue";
import authSignUp from "@/pages/auth/auth-sign-up.page.vue";

// item
import itemForm from "@/pages/item/item-form.page.vue";
import viewItem from "@/pages/item/view-item.page.vue";
// common
import pageNotFound from "@/pages/common/page-not-found.page.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: { name: "viewItem" },
  },
  {
    path: "/view-item",
    name: "viewItem",
    component: viewItem,
  },
  {
    path: "/create-item",
    name: "createItem",
    component: itemForm,
  },
  {
    path: "/edit-item/:itemId",
    name: "editItem",
    component: itemForm,
  },
  { path: "/auth/login", name: "authLogin", component: authLogin },
  {
    path: "/auth/sign-up",
    name: "authSignUp",
    component: authSignUp,
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
