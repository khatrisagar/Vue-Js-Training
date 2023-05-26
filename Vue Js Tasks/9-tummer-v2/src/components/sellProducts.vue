<template>
    <div>
        <h3>Sell products</h3>
        <div class="sell-product-card-container" v-if="getSellProductsData">
            <productCard
                v-for="product in getSellProductsData"
                :key="product.id"
                :product="product"
                @click="viewProductDetails(product.id)"
            />
        </div>
        <div v-else>There is no product on sale</div>
    </div>
</template>

<script>
import { getProductDetails } from "@/utils/helpers/getProductDetails";

import { getProducts } from "@/utils/helpers/getProducts";
import productCard from "./productCard.vue";
export default {
    components: {
        productCard,
    },
    methods: {
        viewProductDetails(productId) {
            getProductDetails(productId);
        },
    },
    computed: {
        getSellProductsData() {
            if (this.$store.getters["saleStore/getSaleStatus"]) {
                return getProducts().filter(
                    (product) => product.isSale == true
                );
            } else {
                return null;
            }
        },
    },
};
</script>

<style scoped>
.sell-product-card-container {
    display: flex;
    gap: 2rem;
}
</style>
