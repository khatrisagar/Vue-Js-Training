<template>
    <div class="subcategory-card-container">
        <productCard
            v-for="productSubCategory in productSubCategoryData"
            :key="productSubCategory.productSubCategoryId"
            :subcategoryImage="productSubCategory.productCategoryImage"
            :subcategoryName="productSubCategory.productCategoryName"
            @click="
                openSubcategoryProducts(productSubCategory.productSubCategoryId)
            "
        />
    </div>
</template>

<script>
import productCard from "../UI/productCard.vue";

export default {
    components: {
        productCard,
    },
    props: {
        productSubCategoryData: {
            type: Object,
        },
    },
    methods: {
        openSubcategoryProducts(productSubCategoryId) {
            this.$emit("openSubcategoryProducts", productSubCategoryId);
        },
    },
};
</script>

<style scoped>
.subcategory-card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
