import { createRouter, createWebHistory } from "vue-router";
import userLogin from "@/pages/userLogin.vue";
import userRegistration from "@/pages/userRegistration.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/login",
            name: "login",
            component: userLogin,
        },
        {
            path: "/signup",
            name: "signup",
            component: userRegistration,
        },
    ],
});
