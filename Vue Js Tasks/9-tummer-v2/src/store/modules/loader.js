export default {
    namespaced: true,
    state() {
        return {
            isLoader: false,
        };
    },
    mutations: {
        onLoad(state) {
            state.isLoader = true;
        },
        offLoad(state) {
            state.isLoader = false;
        },
    },
    actions: {
        setLoader(context) {
            context.commit("onLoad");
        },
        removeLoader(context) {
            console.log("loaderRmove");
            context.commit("offLoad");
        },
    },
    getters: {
        isLoader(state) {
            return state.isLoader;
        },
    },
};
