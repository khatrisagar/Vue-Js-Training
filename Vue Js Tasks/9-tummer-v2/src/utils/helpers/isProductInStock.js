import { getProducts } from "@/utils/helpers/getProducts";
import { store } from "@/store/store";

export const isProductInStock = (cartProductId) => {
    const cartItem = store.getters["getCartData"].find(
        (cartItem) => cartItem.id === cartProductId
    );

    if (cartItem) {
        const product = getProducts().find(
            (product) => product.id === cartItem?.id
        );

        product.stock -= cartItem.quantity;
        if (product.stock >= 1) {
            return true;
        } else {
            return false;
        }
    } else {
        const product = getProducts().find(
            (product) => product.id === cartProductId
        );
        if (product.stock >= 1) {
            return true;
        } else {
            return false;
        }
    }
};
