export default {
    namespaced: true,
    state() {
        return {
            isUserLogin: false,
            userId: null,
        };
    },
    mutations: {
        onLogin(state) {
            state.userId = JSON.parse(localStorage.getItem("user_at"))?.userId;
            state.isUserLogin = true;
        },
        onLogout(state) {
            state.isUserLogin = false;
        },
    },
    actions: {
        setLogin(context) {
            context.commit("onLogin");
        },
        setLogout(context) {
            context.commit("onLogout");
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
