<template>
    <div class="order-history-card">
        <div>
            <h3>Order Id - {{ order.id }}</h3>
            <p>Order Date - {{ new Date(order.date).toLocaleString() }}</p>
        </div>
        <div
            class="product-container"
            v-for="product in getOrderItemData"
            :key="product.id"
        >
            <div class="order-image-container">
                <img :src="product.image" alt="order-item-image" />
            </div>
            <div>
                <h4>Name - {{ product.name }}</h4>
                <p>Price Per Product - {{ product.price }} $</p>
                <p>Quantity - {{ product.quantity }}</p>
            </div>
        </div>
        <p>Total Price - {{ getTotalPrice }}$</p>
    </div>
</template>

<script>
import { getProducts } from "@/utils/helpers/getProducts";
export default {
    props: {
        order: {
            type: Object,
        },
    },

    computed: {
        getOrderItemData() {
            let productObject = [];
            this.order.product.forEach((orderedProduct) => {
                getProducts().forEach((product) => {
                    if (product.id === orderedProduct.id) {
                        productObject.push({
                            id: orderedProduct.id,
                            name: product.name,
                            image: product.image,
                            price: product.price,
                            quantity: orderedProduct.quantity,
                        });
                    }
                });
            });
            return productObject;
        },
        getTotalPrice() {
            let totalPrice = 0;
            this.order.product.forEach((product) => {
                totalPrice += product.price * product.quantity;
            });
            return totalPrice;
        },
    },
};
</script>

<style scoped>
.order-history-card {
    box-shadow: var(--bg-shadow);
    width: 600px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.product-container {
    display: flex;
    flex-direction: row;
    gap: 2rem;
}
</style>
