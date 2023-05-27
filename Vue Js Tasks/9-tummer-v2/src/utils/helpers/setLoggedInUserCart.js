import { store } from "@/store/store";
import { getUsers } from "@/utils/helpers/getUsers";

export const setLoggedInCart = () => {
    let isProductExist = false;
    const users = getUsers();
    const loggedInUser = users.find(
        (user) => user.id == store.getters["auth/getUserId"]
    );
    store.getters["getCartData"].forEach((cartProduct) => {
        if (loggedInUser.cart.length) {
            isProductExist = false;
            loggedInUser.cart.forEach((loggedInUserCartProduct) => {
                if (cartProduct.id === loggedInUserCartProduct.id) {
                    isProductExist = true;
                    loggedInUserCartProduct.quantity += cartProduct.quantity;
                }
            });
            if (!isProductExist) {
                loggedInUser.cart.push(cartProduct);
                isProductExist = false;
            }
        } else {
            loggedInUser.cart.push(cartProduct);
        }
    });
    localStorage.setItem("users", JSON.stringify(users));
};
