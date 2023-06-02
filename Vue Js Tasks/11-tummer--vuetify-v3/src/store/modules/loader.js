export default {
    namespaced: true,
    state() {
        return {
            isLoader: false,
        };
    },
    mutations: {
        SET_LOADER(state) {
            state.isLoader = true;
        },
        REMOVE_LOADER(state) {
            state.isLoader = false;
        },
    },
    actions: {
        setLoader({ commit }) {
            commit("SET_LOADER");
        },
        removeLoader({ commit }) {
            commit("REMOVE_LOADER");
        },
    },
    getters: {
        isLoader(state) {
            return state.isLoader;
        },
    },
};
