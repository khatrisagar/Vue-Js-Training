import { Commit } from "vuex";
import { userStateInterface } from "@/interfaces";
// userStateInterFace,
// userInterface,

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
    SET_LOGGED_IN_USER(state: userStateInterface, user: userStateInterface) {
      state.userAuthToken = user.userAuthToken;
      state.isUserLoggedIn = true;
      state.loggedInUserId = user.loggedInUserId;
      state.loggedInUserName = user.loggedInUserName;
    },
    SET_LOGOUT_IN_USER(state: userStateInterface) {
      state.userAuthToken = null;
      state.loggedInUserId = null;
      state.loggedInUserName = null;
      state.isUserLoggedIn = false;
    },
  },
  actions: {
    setLoggedInUserState(
      { commit }: { commit: Commit },
      user: userStateInterface
    ) {
      commit("SET_LOGGED_IN_USER", user);
    },
    setLogoutUserState({ commit }: { commit: Commit }) {
      commit("SET_LOGOUT_IN_USER");
    },
  },
  getters: {
    getLoggedInUserState(state: userStateInterface) {
      return {
        isUserLoggedIn: state.isUserLoggedIn,
        userAuthToken: state.userAuthToken,
        loggedInUserId: state.loggedInUserId,
        loggedInUserName: state.loggedInUserName,
      };
    },
  },
};
