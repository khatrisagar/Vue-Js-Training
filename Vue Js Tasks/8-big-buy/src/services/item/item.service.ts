import { axiosGet, axiosPost, axiosPatch } from "@/plugins";

export const createItemService = (data: any) => {
  return axiosPost(`items`, data);
};
export const editItemService = (itemId: string, data: any) => {
  return axiosPatch(`items/${itemId}`, data);
};
export const getSellerItemsService = () => {
  return axiosGet(`items/my-items`);
};
