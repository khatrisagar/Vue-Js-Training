<template>
    <div class="container product-list-wrapper">
        <div>
            <router-link :to="{ name: 'home' }">Home</router-link> >
            <router-link
                :to="{
                    name: 'subCategories',
                    params: { category: this.$route.params.category },
                }"
            >
                {{ this.$route.params.category.replaceAll("-", " ") }}
            </router-link>
            >
            {{ this.$route.params.subcategory.replaceAll("-", " ") }}
        </div>
        <div class="card-container">
            <productCard
                v-for="product in productsData"
                :key="product.id"
                :product="product"
                @click="viewProductDetails(product.id)"
            />
        </div>
    </div>
</template>

<script>
import productCard from "@/components/productCard.vue";

import { getSubcategories } from "@/utils/helpers/getSubcategories";
import { getProducts } from "@/utils/helpers/getProducts";

export default {
    components: {
        productCard,
    },
    mounted() {
        const subcategory = getSubcategories().find(
            (subcategory) =>
                subcategory.name ===
                this.$route.params.subcategory.replaceAll("-", " ")
        );

        if (subcategory) {
            this.productsData = getProducts().filter(
                (product) => product.subCategoryId === subcategory.id
            );
        } else {
            this.$router.push({ name: "404" });
        }
    },
    data() {
        return {
            productsData: null,
        };
    },
    methods: {
        viewProductDetails(productId) {
            const product = this.productsData.find(
                (product) => product.id === productId
            );
            this.$router.push({
                name: "productDetails",
                params: {
                    product: product.name.replaceAll(" ", "-"),
                },
            });
        },
    },
};
</script>

<style scoped>
a {
    color: black;
}
.product-list-wrapper {
    margin-top: 2rem;
}
.card-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
}
</style>
