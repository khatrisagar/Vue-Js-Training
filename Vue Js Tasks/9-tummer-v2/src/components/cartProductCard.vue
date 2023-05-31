<template>
    <div class="card-box">
        <div class="card-wrapper">
            <div class="card-image-container">
                <img :src="cartProduct.image" alt="" />
            </div>
            <div>
                <p>{{ cartProduct.name }}</p>
                <div class="quantity-container flex flex-row">
                    <button
                        @click="increaseQuantity(cartProduct.id)"
                        class="quantity-buttons"
                    >
                        +
                    </button>
                    <p>{{ cartProduct.quantity }}</p>
                    <button
                        @click="decreaseQuantity(cartProduct.id)"
                        class="quantity-buttons"
                    >
                        -
                    </button>
                </div>
            </div>
            <div>
                <p>price- {{ getProductPrice }}$</p>
            </div>
            <div>
                <button
                    class="delete-item-button"
                    @click="deleteItem(cartProduct.id)"
                >
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        </div>
        <div v-if="stockOutWarning"><p class="warning">Out Of Stock</p></div>
    </div>
</template>

<script>
import { isProductInStock } from "@/utils/helpers/isProductInStock";
import { mapActions } from "vuex";
export default {
    data() {
        return { stockOutWarning: false };
    },
    props: {
        cartProduct: {
            type: Object,
        },
    },
    methods: {
        ...mapActions({
            addItemToCart: "addItemToCart",
            removeItemFromCart: "removeItemFromCart",
            deleteItemFromCart: "deleteItemFromCart",
        }),
        increaseQuantity(cartProductId) {
            if (isProductInStock(cartProductId)) {
                this.addItemToCart(cartProductId);
            } else {
                this.stockOutWarning = true;
                setTimeout(() => {
                    this.stockOutWarning = false;
                }, 2000);
            }
        },
        decreaseQuantity(cartProductId) {
            this.removeItemFromCart(cartProductId);
        },
        deleteItem(cartProductId) {
            this.deleteItemFromCart(cartProductId);
        },
    },
    computed: {
        getProductPrice() {
            return this.cartProduct.quantity * this.cartProduct.price;
        },
    },
};
</script>

<style scoped>
.card-box {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
}
.card-wrapper {
    display: flex;
    padding: 1rem;
    flex-direction: row;
    justify-content: flex-start;
    gap: 2rem;
    align-items: center;
}
.quantity-container {
    gap: 5px;
    align-items: center;
}
.quantity-buttons {
    width: 1.5rem;

    height: 1.5rem;
}
.delete-item-button {
    border: none;
}
.delete-item-button:hover {
    box-shadow: var(--bg-shadow);
}
</style>
