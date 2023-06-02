import { createRouter, createWebHistory } from "vue-router";

import viewAllPosts from "@/pages/viewAllPosts";
import viewPost from "@/pages/viewPost";
import addPost from "@/pages/addPost";
import pageNotFOund from "@/pages/pageNotFound";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "home",
            path: "/",
            component: viewAllPosts,
        },
        {
            name: "posts",
            path: "/posts",
            redirect: { name: "home" },
        },
        {
            name: "post",
            path: "/post/:postId",
            component: viewPost,
        },
        {
            name: "addPost",
            path: "/add-post",
            component: addPost,
        },
        {
            name: "404",
            path: "/404",
            component: pageNotFOund,
        },
    ],
});
