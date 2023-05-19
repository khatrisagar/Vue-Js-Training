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

const authenticateUser = () => {
    const idLoggedInUserId =
        JSON.parse(localStorage.getItem("user_at"))?.id || null;
    console.log("checkkk");
    if (idLoggedInUserId) {
        return true;
    } else {
        return false;
    }
};

const authenticateFriendshipStatus = (to) => {
    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    const loggedInUserId = JSON.parse(localStorage.getItem("user_at"))?.id;
    const loggedInUser = userData.find((user) => user.id === loggedInUserId);

    if (loggedInUser.friends.includes(parseInt(to.params.id))) {
        return true;
    } else {
        return false;
    }
};

const authenticateGroupAccess = (to) => {
    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    const loggedInUserId = JSON.parse(localStorage.getItem("user_at"))?.id;
    const loggedInUser = userData.find((user) => user.id === loggedInUserId);

    if (loggedInUser.groups.includes(parseInt(to.params.groupId))) {
        return true;
    } else {
        return false;
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

app.use(router);

app.mount("#app");
