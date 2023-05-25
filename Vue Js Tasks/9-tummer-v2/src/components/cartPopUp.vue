<template>
    <div class="cart-popup-wrapper">
        <button class="close-button" @click="closePopUp">X</button>
        <div class="cart-cards">
            <div v-if="getCartProducts.length > 0">
                <cartProductCard
                    v-for="cartProduct in getCartProducts"
                    :key="cartProduct.id"
                    :cartProduct="cartProduct"
                />

                <div class="cart-footer flex flex-row">
                    <button class="primary-button" @click="createOrder">
                        pay {{ getTotalPrice }} $
                    </button>
                </div>
            </div>
            <div v-else>
                <p>Cart Is Empty</p>
            </div>
        </div>
    </div>
</template>

<script>
import { getProducts } from "@/utils/helpers/getProducts";
import { getUsers } from "@/utils/helpers/getUsers";
import cartProductCard from "@/components/cartProductCard";

export default {
    components: {
        cartProductCard,
    },
    methods: {
        closePopUp() {
            this.$emit("closePopUp");
        },
        createOrder() {
            let orderedProducts = [];
            this.$store.state.cart.forEach((cartProduct) => {
                getProducts().forEach((product) => {
                    if (product.id === cartProduct.id) {
                        console.log(product);
                        orderedProducts.push({
                            id: cartProduct.id,
                            quantity: cartProduct.quantity,
                            price: product.price,
                        });
                    }
                });
            });

            // order object to push
            const order = {
                id: new Date().getTime(),
                date: new Date().toISOString(),
                userId: JSON.parse(localStorage.getItem("user_at")).userId,
                product: orderedProducts,
            };

            let orders = JSON.parse(localStorage.getItem("orders")) ?? [];
            orders.push(order);

            let users = getUsers();
            const loggedInUser = users.find(
                (user) =>
                    user.id ===
                    JSON.parse(localStorage.getItem("user_at")).userId
            );
            loggedInUser.orderHistory.push(new Date().getTime());

            localStorage.setItem("users", JSON.stringify(users));

            localStorage.setItem("orders", JSON.stringify(orders));
            this.$store.dispatch("clearCart");
        },
    },
    computed: {
        getCartProducts() {
            let cartProducts = [];
            this.$store.state.cart.forEach((cartProduct) => {
                getProducts().forEach((product) => {
                    if (cartProduct.id === product.id) {
                        cartProducts.push({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            quantity: cartProduct.quantity,
                            image: product.image,
                        });
                    }
                });
            });
            return cartProducts;
        },
        getTotalPrice() {
            let totalPrice = 0;
            this.getCartProducts.forEach((product) => {
                totalPrice += product.quantity * product.price;
            });
            return totalPrice;
        },
    },
};
</script>

<style scoped>
.cart-popup-wrapper {
    padding: 1rem;
    box-shadow: var(--bg-shadow);
}

.close-button {
    box-shadow: var(--bg-shadow);
    font-size: 1rem;
    font-weight: 900;
    background: transparent;
    border: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
}
.cart-cards {
    margin-top: 2rem;
}
.cart-footer {
    justify-content: flex-end;
    align-items: center;
    gap: 4rem;
}
</style>
