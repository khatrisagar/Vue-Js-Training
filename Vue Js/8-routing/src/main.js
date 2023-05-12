import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import HelloWorldVue from "./components/HelloWorld.vue";
import testView from "./components/testView.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/home",
            component: HelloWorldVue,
        },
        {
            path: "/test",
            component: testView,
        },
    ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
