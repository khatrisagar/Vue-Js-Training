import { getSellerItemsService } from "@/services";
import store from "@/store";

export const setSellerItem = async () => {
  const allSellerItem = async () => {
    try {
      const sellerItems = await getSellerItemsService();
      return sellerItems.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  console.log();
  if (!store.getters["item/getSellerItemState"]?.length) {
    await store.dispatch("item/setSellerItemToState", await allSellerItem());
  }
};
