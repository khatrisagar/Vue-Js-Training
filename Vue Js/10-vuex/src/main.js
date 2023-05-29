import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";

// , mapGetters

const moduleOne = {
    namespaced: true,
    store() {
        return {};
    },
    mutations: {},
    // ...
};

const store = createStore({
    modules: {
        one: moduleOne,
    },
    state() {
        return {
            counter: 0,
        };
    },
    mutations: {
        // it take an current state as an argument
        // increment(state) {
        //     state.counter++;
        // },
        increment(state, data) {
            state.counter += data;
        },
    },

    actions: {
        // same name as a mutations
        increment(context, payload) {
            setTimeout(() => {
                context.commit("increment", payload);
            }, 2000);
        },
    },
    getters: {
        // doubleThecounter(state, otherGetters){
        doubleTheCounter(state) {
            return state.counter * 3;
        },
    },
});

const app = createApp(App);

app.use(store);
app.mount("#app");
