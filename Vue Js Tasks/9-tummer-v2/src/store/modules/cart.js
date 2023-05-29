import { store } from "@/store/store";
// import { getProducts } from "@/utils/helpers/getProducts";
import { getUsers } from "@/utils/helpers/getUsers";

export default {
    state() {
        return {
            cart: [],
        };
    },
    mutations: {
        onLoadCart(state) {
            if (store.getters["auth/getIsUserLogin"]) {
                const users = getUsers();
                const loggedInUserData = users.find(
                    (user) => user.id === store.getters["auth/getUserId"]
                );
                state.cart = loggedInUserData.cart;
                localStorage.removeItem("cart");
            } else {
                state.cart = JSON.parse(localStorage.getItem("cart")) ?? [];
            }
        },

        addItemToCart(state, productId) {
            const alreadyExitsProductInCart = state.cart.map(
                (cartItem) => cartItem.id
            );
            if (alreadyExitsProductInCart.includes(productId)) {
                state.cart = state.cart.map((cartItem) => {
                    if (cartItem.id == productId) {
                        return {
                            ...cartItem,
                            quantity: cartItem.quantity + 1,
                        };
                    } else {
                        return cartItem;
                    }
                });
            } else {
                state.cart.push({
                    id: productId,
                    quantity: 1,
                });
            }
        },

        // addItemToCart(state, productId) {
        //     const isalredyExistInCart = state.cart.find(
        //         (product) => product.id === productId
        //     );
        //     let product = getProducts().find(
        //         (product) => product.id === productId
        //     );
        //     // setTimeout(() => {
        //     //     console.log(product, product.stock);

        //     if (product.stock) {
        //         if (
        //             isalredyExistInCart &&
        //             product.stock > isalredyExistInCart.quantity
        //         ) {
        //             isalredyExistInCart.quantity++;
        //             product.stock -= isalredyExistInCart.quantity;
        //         } else {
        //             state.cart.push({
        //                 id: productId,
        //                 quantity: 1,
        //             });
        //         }
        //     }
        //     // }, 500);
        // },
        removeItemFromCart(state, productId) {
            const itemIndex = state.cart.findIndex(
                (product) => product.id === productId
            );
            if (state.cart[itemIndex].quantity > 1) {
                state.cart[itemIndex].quantity--;
            } else {
                state.cart.splice(itemIndex, 1);
            }
        },
        deleteItemFromCart(state, productId) {
            state.cart.splice(
                state.cart.findIndex((product) => product.id === productId),
                1
            );
        },
        // on logout clear cart
        clearCart(state) {
            state.cart = [];
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        // on order clear cart
        onOrder(state) {
            state.cart = [];
        },
        setLocalStorageCart(state) {
            if (store.getters["auth/getIsUserLogin"]) {
                const users = JSON.parse(localStorage.getItem("users"));
                const loggedInUserData = users.find(
                    (user) => user.id === store.getters["auth/getUserId"]
                );
                loggedInUserData.cart = state.cart;
                localStorage.setItem("users", JSON.stringify(users));
            } else {
                localStorage.setItem("cart", JSON.stringify(state.cart));
            }
        },
    },
    actions: {
        loadCart(context) {
            context.commit("onLoadCart");
        },
        addItemToCart(context, productId) {
            context.commit("addItemToCart", productId);
            context.commit("setLocalStorageCart");
        },
        removeItemFromCart(context, productId) {
            context.commit("removeItemFromCart", productId);
            context.commit("setLocalStorageCart");
        },
        deleteItemFromCart(context, productId) {
            context.commit("deleteItemFromCart", productId);
            context.commit("setLocalStorageCart");
        },
        clearCart(context) {
            context.commit("clearCart");
        },
        onOrder(context) {
            context.commit("onOrder");
            context.commit("setLocalStorageCart");
        },
    },
    getters: {
        getCartData(state) {
            return state.cart;
        },
    },
};
