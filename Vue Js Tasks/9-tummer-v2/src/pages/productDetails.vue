<template>
    <div class="container">
        <div class="image-container">
            <img class="image" :src="product.image" alt="" />
        </div>
        <div>
            <p>Product Name:- {{ product.name }}</p>
            <p>Product Information:- {{ product.productDescription }}</p>
            <p>Product Name:- {{ product.price }}</p>
            <p>Product Rating:- {{ getRating }}</p>
        </div>
    </div>
</template>

<script>
import { getProducts } from "@/utils/helpers/getProducts";
export default {
    components() {},
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
};
</script>

<style scoped>
.image {
    width: 300px;
}
</style>
