import { Commit } from "vuex";

export default {
  namespaced: true,
  state() {
    return {
      sellerItems: [],
    };
  },
  mutations: {
    SET_SELLER_ITEMS(state: any, items: any) {
      state.sellerItems = items;
    },
    ADD_SELLER_ITEM(state: any, item: any) {
      state.sellerItems.push(item);
    },
    REMOVE_SELLER_ITEM(state: any, itemIndex: number) {
      state.sellerItems.splice(itemIndex, 1);
    },
  },
  actions: {
    setSellerItemToState({ commit }: { commit: Commit }, items: any) {
      commit("SET_SELLER_ITEMS", items);
    },
    addSellerItemToState({ commit }: { commit: Commit }, item: any) {
      commit("ADD_SELLER_ITEM", item);
    },
    removeSellerItemFromState(
      { commit }: { commit: Commit },
      itemIndex: number
    ) {
      commit("REMOVE_SELLER_ITEM", itemIndex);
    },
  },
  getters: {
    getSellerItemState(state: any) {
      return state.sellerItems;
    },
  },
};
