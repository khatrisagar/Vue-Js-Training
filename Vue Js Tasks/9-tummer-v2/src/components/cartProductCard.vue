<template>
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
</template>

<script>
export default {
    props: {
        cartProduct: {
            type: Object,
        },
    },
    methods: {
        increaseQuantity(cartProductId) {
            this.$store.dispatch("addItemToCart", cartProductId);
        },
        decreaseQuantity(cartProductId) {
            this.$store.dispatch("removeItemFromCart", cartProductId);
        },
        deleteItem(cartProductId) {
            this.$store.dispatch("deleteItemFromCart", cartProductId);
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
.card-wrapper {
    border: 1px solid black;
    padding: 1rem;
    display: flex;
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
