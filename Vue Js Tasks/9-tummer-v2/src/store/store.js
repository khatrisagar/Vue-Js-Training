import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            cart: [],
        };
    },
    mutations: {
        addItemToCart(state, productId) {
            const isalredyExistInCart = state.cart.find(
                (product) => product.id === productId
            );
            if (isalredyExistInCart) {
                isalredyExistInCart.quantity++;
            } else {
                state.cart.push({
                    id: productId,
                    quantity: 1,
                });
            }
        },
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
        clearCart(state) {
            state.cart = [];
        },
        setLocalStorageCart(state) {
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
    },
    actions: {
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
            context.commit("setLocalStorageCart");
        },
    },
});
