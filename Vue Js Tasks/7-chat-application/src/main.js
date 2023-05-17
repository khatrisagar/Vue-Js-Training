import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/commonStyles.css";
import { createRouter, createWebHistory } from "vue-router";

import allUsers from "@/pages/allUsers.vue";
import userFriends from "@/pages/userFriends.vue";
import userChatRoom from "@/pages/userChatRoom.vue";
import userProfile from "@/pages/userProfile.vue";

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "users",
            path: "/users",
            component: allUsers,
        },
        {
            name: "friends",
            path: "/friends",
            component: userFriends,
        },
        {
            name: "chatRoom",
            path: "/chat-room",
            component: userChatRoom,
        },
        {
            path: "/users/:id",
            component: userProfile,
            props: true,
            beforeEnter: (to, from, next) => {
                const userData =
                    JSON.parse(localStorage.getItem("userData")) || [];
                const loggedInUserId =
                    JSON.parse(localStorage.getItem("user_at")).id || [];
                const loggedInUser = userData.find(
                    (user) => user.id === loggedInUserId
                );

                if (loggedInUser.friends.includes(parseInt(to.params.id))) {
                    next();
                } else {
                    return next(false);
                }
            },
        },
    ],
});

app.use(router);

app.mount("#app");
