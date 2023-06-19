import { getSellerItemsService } from "@/services";
import store from "@/store";

export const setSellerItem = async () => {
  try {
    const allSellerItem = async () => {
      try {
        const sellerItems = await getSellerItemsService();
        return sellerItems.data.data;
      } catch (error) {
        console.log(error);
      }
    };
    if (!store.getters["item/getSellerItemState"]?.length) {
      await store.dispatch("item/setSellerItemToState", await allSellerItem());
    }
  } catch (error) {
    console.log(error);
  }
};
