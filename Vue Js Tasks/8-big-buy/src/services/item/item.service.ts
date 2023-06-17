import { axiosGet, axiosPost, axiosPatch } from "@/plugins";

import { sellerItemInterface } from "@/interfaces";
// sellers item

export const createItemService = (data: sellerItemInterface) => {
  return axiosPost(`items`, data);
};
export const editItemService = (itemId: string, data: sellerItemInterface) => {
  return axiosPatch(`items/${itemId}`, data);
};
export const getSellerItemsService = () => {
  return axiosGet(`items/my-items`);
};

// all items

export const getAllItemService = (options?: object) => {
  return axiosGet(`items`, options);
};
export const getPurchaseItemHistoryService = () => {
  return axiosGet(`purchase-history/my-purchase`);
};

export const purchaseItemService = (data: any) => {
  return axiosPost(`purchase-history/purchase`, data);
};
