import { createRouter, createWebHistory } from "vue-router";

import allUsers from "@/pages/allUsers.vue";
import userFriends from "@/pages/userFriends.vue";
import userChatRoom from "@/pages/userChatRoom.vue";
import userProfile from "@/pages/userProfile.vue";
import userLogin from "@/pages/userLogin.vue";

import { authenticateUser } from "./navigation-gaurds/authLogin.gaurd";
import { authenticateFriendshipStatus } from "./navigation-gaurds/authFriendship.gaurd";
import { authenticateGroupAccess } from "./navigation-gaurds/authGroups.gaurd";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "login",
            path: "/login",
            component: userLogin,
            beforeEnter: (to, from, next) => {
                JSON.parse(localStorage.getItem("user_at"))?.id
                    ? next({ name: "users" })
                    : next();
            },
        },
        {
            name: "logout",
            path: "/logout",
            beforeEnter: (to, from, next) => {
                localStorage.removeItem("user_at");
                return next({ name: "login" });
            },
        },
        {
            name: "users",
            path: "/users",
            component: allUsers,
        },
        {
            name: "friends",
            path: "/friends",
            component: userFriends,
            beforeEnter: (to, from, next) => {
                if (authenticateUser()) {
                    next();
                } else {
                    next({ name: "users" });
                }
            },
        },
        {
            path: "/users/:id",
            component: userProfile,
            props: true,
            beforeEnter: (to, from, next) => {
                if (authenticateFriendshipStatus(to)) {
                    next();
                } else {
                    next({ name: "login" });
                }
            },
        },
        {
            name: "chatRoom",
            path: "/chat-room/:id",
            component: userChatRoom,
            beforeEnter: (to, from, next) => {
                if (authenticateUser()) {
                    if (authenticateFriendshipStatus(to)) {
                        next();
                    } else {
                        next({ name: "login" });
                    }
                } else {
                    return next({ name: "login" });
                }
            },
        },
        {
            name: "groupChatRoom",
            path: "/chat-room/group/:groupId",
            component: userChatRoom,
            beforeEnter: (to, from, next) => {
                if (authenticateGroupAccess(to)) {
                    next();
                } else {
                    next({ name: "users" });
                }
            },
        },
    ],
});
