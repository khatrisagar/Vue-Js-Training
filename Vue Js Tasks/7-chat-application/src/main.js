import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/commonStyles.css";
import { createRouter, createWebHistory } from "vue-router";

import allUsers from "@/pages/allUsers.vue";
import userFriends from "@/pages/userFriends.vue";
import userChatRoom from "@/pages/userChatRoom.vue";
import userProfile from "@/pages/userProfile.vue";
import userLogin from "@/pages/userLogin.vue";

const app = createApp(App);

const authenticateUser = (next) => {
    const idLoggedInUserId =
        JSON.parse(localStorage.getItem("user_at"))?.id || null;
    console.log("checkkk");
    if (idLoggedInUserId) {
        next();
    } else {
        return next({ name: "login" });
    }
};

const authenticateFriendshipStatus = (to, next) => {
    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    const loggedInUserId = JSON.parse(localStorage.getItem("user_at"))?.id;
    const loggedInUser = userData.find((user) => user.id === loggedInUserId);
    console.log("aaaaaaaa", loggedInUser.friends);

    if (loggedInUser.friends.includes(parseInt(to.params.id))) {
        next();
    } else {
        return next({ name: "users" });
    }
};

const router = createRouter({
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
                authenticateUser(next);
            },
        },
        {
            name: "chatRoom",
            path: "/chat-room/:id",
            component: userChatRoom,
            beforeEnter: (to, from, next) => {
                const idLoggedInUserId =
                    JSON.parse(localStorage.getItem("user_at"))?.id || null;
                if (idLoggedInUserId) {
                    const userData =
                        JSON.parse(localStorage.getItem("userData")) || [];
                    const loggedInUserId = JSON.parse(
                        localStorage.getItem("user_at")
                    )?.id;
                    const loggedInUser = userData.find(
                        (user) => user.id === loggedInUserId
                    );

                    if (loggedInUser.friends.includes(parseInt(to.params.id))) {
                        next();
                    } else {
                        return next({ name: "users" });
                    }
                } else {
                    return next({ name: "login" });
                }
            },
        },

        {
            path: "/users/:id",
            component: userProfile,
            props: true,
            beforeEnter: (to, from, next) => {
                authenticateFriendshipStatus(to, next);
            },
        },
    ],
});

app.use(router);

app.mount("#app");
