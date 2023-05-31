import { createRouter, createWebHistory } from "vue-router";

// pages
import userLogin from "@/pages/userLogin";
import pageNotFound from "@/pages/pageNotFound.vue";
import homePage from "@/pages/homePage";
import subCategory from "@/pages/subCategoryPage";
import productList from "@/pages/productList";
import productDetails from "@/pages/productDetails";
import orderHistory from "@/pages/orderHistory";

// gaurds
import { authGaurd, alreadyLoginAuth } from "./routing-gaurds/auth.gaurd";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "login",
            path: "/login",
            component: userLogin,
            beforeEnter: alreadyLoginAuth,
        },
        {
            name: "home",
            path: "/",
            component: homePage,
            beforeEnter: (to, from, next) => {
                next();
            },
        },
        {
            name: "subCategories",
            path: "/:category",
            component: subCategory,
            beforeEnter: (to, from, next) => {
                next();
            },
        },

        {
            name: "productList",
            path: "/:category/:subcategory",
            component: productList,
            beforeEnter: (to, from, next) => {
                next();
            },
        },
        {
            name: "productDetails",
            path: "/:category/:subcategory/:product",
            component: productDetails,
            beforeEnter: (to, from, next) => {
                next();
            },
        },
        {
            name: "orderHistory",
            path: "/order-history",
            component: orderHistory,
            beforeEnter: authGaurd,
        },

        {
            name: "404",
            path: "/404",
            component: pageNotFound,
            beforeEnter: (to, from, next) => {
                next();
            },
        },
        {
            name: "pageNotFound",
            path: "/:pageNotFound(.*)*",
            redirect: { name: "404" },
        },
    ],
});
