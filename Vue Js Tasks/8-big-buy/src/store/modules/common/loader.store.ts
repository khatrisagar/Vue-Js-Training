import { Commit } from "vuex";
import { loaderStateInterface } from "@/interfaces";

export default {
  namespaced: true,
  state() {
    return {
      isLoaderVisible: false,
    };
  },
  mutations: {
    SET_LOADER(state: loaderStateInterface) {
      state.isLoaderVisible = true;
    },
    REMOVE_LOADER(state: loaderStateInterface) {
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
    getLoaderState(state: loaderStateInterface) {
      return state.isLoaderVisible;
    },
  },
};
