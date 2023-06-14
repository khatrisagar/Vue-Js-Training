import { Commit } from "vuex";
// import { userStateInterFace, userInterface } from "@/interfaces";

export default {
  namespaced: true,
  state() {
    return {
      isUserLoggedIn: false,
      loggedInUserId: null,
      loggedInUserName: null,
      userAuthToken: null,
    };
  },
  mutations: {
    SET_LOGGED_IN_USER(state: any, user: any) {
      state.userAuthToken = user.authToken;
      state.isUserLoggedIn = true;
      state.loggedInUserId = user.id;
      state.loggedInUserName = user.name;
    },
    SET_LOGOUT_IN_USER(state: any) {
      state.userAuthToken = null;
      state.loggedInUserId = null;
      state.loggedInUserName = null;
      state.isUserLoggedIn = false;
    },
  },
  actions: {
    setLoggedInUserState({ commit }: { commit: Commit }, user: any) {
      commit("SET_LOGGED_IN_USER", user);
    },
    setLogoutUserState({ commit }: { commit: Commit }) {
      commit("SET_LOGOUT_IN_USER");
    },
  },
  getters: {
    getLoggedInUserState(state: any) {
      return {
        isUserLoggedIn: state.isUserLoggedIn,
        userAuthToken: state.userAuthToken,
        loggedInUserId: state.loggedInUserId,
        loggedInUserName: state.loggedInUserName,
      };
    },
  },
};
