import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import routeOne from "./components/appOne.vue";
import routeTwo from "./components/appTwo.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/route-one",
            component: routeOne,
        },
        {
            path: "/route-two",
            component: routeTwo,
        },
        {
            path: "/route-two/:name",
            component: routeTwo,
            props: true,
        },
    ],
});

const app = createApp(App);
app.use(router);
router.isReady();
app.mount("#app");
