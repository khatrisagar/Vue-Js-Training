import { Commit } from "vuex";

export default {
  namespaced: true,
  state() {
    return {
      isLoaderVisible: false,
    };
  },
  mutations: {
    SET_LOADER(state: any) {
      state.isLoaderVisible = true;
    },
    REMOVE_LOADER(state: any) {
      state.isLoaderVisible = false;
    },
  },
  actions: {
    addLoaderState({ commit }: { commit: Commit }) {
      commit("SET_LOADER");
    },
    removeLoaderState({ commit }: { commit: Commit }) {
      commit("REMOVE_LOADER");
    },
  },
  getters: {
    getLoaderState(state: any) {
      return state.isLoaderVisible;
    },
  },
};
