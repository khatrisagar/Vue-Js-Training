<template>
    <div class="home-page-wrapper container">
        <div class="category-sidebar">
            <categoryCard
                class="category-card"
                v-for="productCategory in productCategories"
                :key="productCategory.id"
                :productCategory="productCategory"
                @click="viewSubCategory(productCategory.id)"
            />
        </div>

        <trendingProducts class="trending-products" />
        <sellProducts class="sell-products" />
    </div>
</template>

<script>
import categoryCard from "@/components/categoryCard.vue";
import { getCategories } from "@/utils/helpers/getCategories";
import trendingProducts from "@/components/trendingProducts.vue";
import sellProducts from "@/components/sellProducts.vue";

export default {
    components: {
        categoryCard,
        trendingProducts,
        sellProducts,
    },
    created() {
        this.productCategories = getCategories();
    },
    data() {
        return {
            productCategories: null,
        };
    },

    methods: {
        viewSubCategory(categoryId) {
            const category = this.productCategories.find(
                (category) => category.id == categoryId
            );
            this.$router.push({
                name: "subCategories",
                params: { category: category.name.replaceAll(" ", "-") },
            });
        },
    },
};
</script>

<style scoped>
.category-sidebar {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.category-card {
    user-select: none;
    cursor: pointer;
}

.trending-products {
    margin-top: 2rem;
}
.sell-products {
    margin-top: 2rem;
}
</style>
