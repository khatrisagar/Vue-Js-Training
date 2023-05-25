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
        },
        {
            name: "subCategories",
            path: "/:category",
            component: subCategory,
        },

        {
            name: "productList",
            path: "/:category/:subcategory",
            component: productList,
        },
        {
            name: "productDetails",
            path: "/:category/:subcategory/:product",
            component: productDetails,
        },
        {
            name: "orderHistory",
            path: "/order-history",
            component: orderHistory,
        },

        {
            name: "404",
            path: "/404",
            component: pageNotFound,
        },
        {
            name: "pageNotFound",
            path: "/:pageNotFound(.*)*",
            redirect: { name: "404" },
        },
    ],
});
