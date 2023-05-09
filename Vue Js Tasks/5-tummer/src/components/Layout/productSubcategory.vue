<template>
    <div class="subcategory-card-container">
        <subcategoryCard
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
import subcategoryCard from "../UI/subcategoryCard.vue";

export default {
    components: {
        subcategoryCard,
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
