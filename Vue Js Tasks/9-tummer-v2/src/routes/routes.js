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
import { authGaurd } from "./routing-gaurds/auth.gaurd";

// routing actions
import { setCart } from "@/routes/routing-actions/setCart";
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "login",
            path: "/login",
            component: userLogin,
        },
        {
            name: "home",
            path: "/",
            component: homePage,
            beforeEnter: (to, from, next) => {
                authGaurd();
                setCart();
                next();
            },
        },
        {
            name: "subCategories",
            path: "/:category",
            component: subCategory,
            beforeEnter: (to, from, next) => {
                authGaurd();
                setCart();
                next();
            },
        },

        {
            name: "productList",
            path: "/:category/:subcategory",
            component: productList,
            beforeEnter: (to, from, next) => {
                authGaurd();
                setCart();
                next();
            },
        },
        {
            name: "productDetails",
            path: "/:category/:subcategory/:product",
            component: productDetails,
            beforeEnter: (to, from, next) => {
                authGaurd();
                setCart();
                next();
            },
        },
        {
            name: "orderHistory",
            path: "/order-history",
            component: orderHistory,
            beforeEnter: (to, from, next) => {
                if (authGaurd()) {
                    next();
                } else {
                    next({ name: "login" });
                }
            },
        },

        {
            name: "404",
            path: "/404",
            component: pageNotFound,
            beforeEnter: (to, from, next) => {
                authGaurd();
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
