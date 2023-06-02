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
        SET_CART(state) {
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

        ADD_ITEM_TO_CART(state, productId) {
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

        REMOVE_ITEM_FROM_CART(state, productId) {
            const itemIndex = state.cart.findIndex(
                (product) => product.id === productId
            );
            if (state.cart[itemIndex].quantity > 1) {
                state.cart[itemIndex].quantity--;
            } else {
                state.cart.splice(itemIndex, 1);
            }
        },
        DELETE_ITEM_FROM_CART(state, productId) {
            state.cart.splice(
                state.cart.findIndex((product) => product.id === productId),
                1
            );
        },
        // on logout clear cart
        CELAR_CART(state) {
            state.cart = [];
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        // on order clear cart
        ON_ORDER(state) {
            state.cart = [];
        },
        SET_LOCAL_STORAGE_CART(state) {
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
            context.commit("SET_CART");
        },
        addItemToCart({ commit }, productId) {
            commit("ADD_ITEM_TO_CART", productId);
            commit("SET_LOCAL_STORAGE_CART");
        },
        removeItemFromCart({ commit }, productId) {
            commit("REMOVE_ITEM_FROM_CART", productId);
            commit("SET_LOCAL_STORAGE_CART");
        },
        deleteItemFromCart({ commit }, productId) {
            commit("DELETE_ITEM_FROM_CART", productId);
            commit("SET_LOCAL_STORAGE_CART");
        },
        clearCart({ commit }) {
            commit("CELAR_CART");
        },
        onOrder({ commit }) {
            commit("ON_ORDER");
            commit("SET_LOCAL_STORAGE_CART");
        },
    },
    getters: {
        getCartData(state) {
            return state.cart;
        },
    },
};
