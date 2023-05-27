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
    created() {},
    methods: {
        closePopUp() {
            this.$emit("closePopUp");
        },
        createOrder() {
            const userID = this.$store.getters["auth/getUserId"];
            if (userID) {
                let orderedProducts = [];
                const products = getProducts();
                this.$store.getters["getCartData"].forEach((cartProduct) => {
                    products.forEach((product) => {
                        if (product.id === cartProduct.id) {
                            orderedProducts.push({
                                id: cartProduct.id,
                                quantity: cartProduct.quantity,
                                price: product.price,
                            });
                            product.stock -= cartProduct.quantity;
                        }
                    });
                });

                // order object to push
                const order = {
                    id: new Date().getTime(),
                    date: new Date().toISOString(),
                    userId: userID,
                    product: orderedProducts,
                };

                let orders = JSON.parse(localStorage.getItem("orders")) ?? [];
                orders.push(order);

                let users = getUsers();
                const loggedInUser = users.find((user) => user.id === userID);
                loggedInUser.orderHistory.push(order.id);

                localStorage.setItem("users", JSON.stringify(users));
                localStorage.setItem("products", JSON.stringify(products));
                localStorage.setItem("orders", JSON.stringify(orders));
                this.$store.dispatch("onOrder");
            } else {
                this.closePopUp();
                this.$router.push({ name: "login" });
            }
        },
    },
    computed: {
        getCartProducts() {
            let cartProducts = [];
            this.$store.getters["getCartData"].forEach((cartProduct) => {
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
    background-color: var(--white);
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
