export default {
    namespaced: true,
    state() {
        return {
            theme: "light",
        };
    },
    mutations: {
        SET_THEME(state, theme) {
            state.theme = theme;
        },
    },
    actions: {
        setTheme({ commit }, theme) {
            console.log(theme);
            commit("SET_THEME", theme);
        },
    },
    getters: {
        getTheme(state) {
            return state.theme;
        },
    },
};
