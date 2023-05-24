import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            isCartPopUp: false,
        };
    },
    mutations: {
        changeCartPopUpState(state) {
            state.isCartPopUp = !state.isCartPopUp;
        },
    },
    actions: {
        isCart(context) {
            context.commit("changeCartPopUpState");
        },
    },
});
