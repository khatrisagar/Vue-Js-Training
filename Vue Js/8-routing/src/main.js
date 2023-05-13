import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import HelloWorldVue from "./components/HelloWorld.vue";
import testView from "./components/testView.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "home",
            path: "/",
            // alias: "/",
            redirect: "/home",
        },
        {
            path: "/home",
            // alias: "/",
            component: HelloWorldVue,
            // using with named routing
            // components:{ default: test, hello:home},
            children: [
                {
                    // path: "/home/:id",
                    // not need to repeat enitire route
                    // but it can't render in router view it have to seperatiely add the router-view inside prent route
                    path: "/:id",
                    component: HelloWorldVue,
                    props: true,
                },
            ],
        },
        {
            path: "/test",
            component: testView,
            // same as before each
            beforeEnter() {},
        },

        {
            // 404
            path: "/:notfound(.*)",
            component: testView,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition);
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    },
});
// this fuction is called everytime when we navigate from the one page to another page
router.beforeEach((to, from, next) => {
    console.log(to, from);
    // allow
    next();
    // cancel navigation
    next(false);
    // redirect
    next("/test");
});
// meta
const app = createApp(App);

app.use(router);

app.mount("#app");
