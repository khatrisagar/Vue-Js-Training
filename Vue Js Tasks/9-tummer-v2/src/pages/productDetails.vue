<template>
    <div class="container">
        <div class="image-container">
            <img class="image" :src="product.image" alt="" />
        </div>
        <div>
            <p>Product Name:- {{ product.name }}</p>
            <p>Product Information:- {{ product.productDescription }}</p>
            <p>Product Name:- {{ product.price }}$</p>
            <p>Product Rating:- {{ getRating }}</p>
            <button class="add-to-cart-button" @click="addToCart(product.id)">
                <i class="fas fa-shopping-cart"></i>
            </button>
        </div>
    </div>
</template>

<script>
import { getProducts } from "@/utils/helpers/getProducts";
export default {
    created() {
        this.product = getProducts().find((product) => {
            return (
                product.name === this.$route.params.product.replaceAll("-", " ")
            );
        });
    },
    data() {
        return {
            product: null,
        };
    },
    computed: {
        getRating() {
            if (this.product.rating.length > 0) {
                const totalRatingValue = this.product.rating.reduce(
                    (sum, current) => {
                        return sum + current;
                    }
                );
                return totalRatingValue / this.product.rating.length;
            } else {
                return 0;
            }
        },
    },
    methods: {
        addToCart(productId) {
            this.$store.dispatch("addItemToCart", productId);
        },
    },
};
</script>

<style scoped>
.image {
    width: 300px;
}
.add-to-cart-button {
    border: 1px solid var(--primary-color);
    padding: 0.3rem;
    font-size: 1rem;
    border-radius: 4px;
    background: transparent;
    color: var(--primary-color);
}
.add-to-cart-button:active {
    box-shadow: var(--bg-shadow);
}
</style>
