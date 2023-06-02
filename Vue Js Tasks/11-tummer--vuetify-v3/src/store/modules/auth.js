export default {
    namespaced: true,
    state() {
        return {
            isUserLogin: false,
            userId: null,
        };
    },
    mutations: {
        SET_LOGIN(state, userId) {
            state.userId = userId;
            state.isUserLogin = true;
        },
        SET_LOGOUT(state) {
            state.userId = null;
            state.isUserLogin = false;
        },
    },
    actions: {
        setLogin({ commit }, userId) {
            commit("SET_LOGIN", userId);
        },
        setLogout({ commit }) {
            commit("SET_LOGOUT");
        },
    },
    getters: {
        getUserId(state) {
            return state.userId;
        },
        getIsUserLogin(state) {
            return state.isUserLogin;
        },
    },
};
