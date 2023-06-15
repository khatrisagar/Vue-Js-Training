import { Commit } from "vuex";
import { sellerItemInterface, sellerItemStateInterface } from "@/interfaces";
export default {
  namespaced: true,
  state() {
    return {
      sellerItems: [],
    };
  },
  mutations: {
    // all items

    // seller's items
    SET_SELLER_ITEMS(
      state: sellerItemStateInterface,
      items: Array<sellerItemInterface>
    ) {
      state.sellerItems = items;
    },
    ADD_SELLER_ITEM(
      state: sellerItemStateInterface,
      item: sellerItemInterface
    ) {
      state.sellerItems.push(item);
    },
    REMOVE_SELLER_ITEM(state: sellerItemStateInterface, itemIndex: number) {
      state.sellerItems.splice(itemIndex, 1);
    },
  },
  actions: {
    // seller's items
    setSellerItemToState(
      { commit }: { commit: Commit },
      items: Array<sellerItemInterface>
    ) {
      commit("SET_SELLER_ITEMS", items);
    },
    addSellerItemToState(
      { commit }: { commit: Commit },
      item: Array<sellerItemInterface>
    ) {
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
    getSellerItemState(state: sellerItemStateInterface) {
      return state.sellerItems;
    },
  },
};
