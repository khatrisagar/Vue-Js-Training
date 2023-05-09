<template>
    <div class="sidebarcard-wrapper container">
        <sidebarCard
            v-for="productCategory in productCategoryData"
            :key="productCategory.productCategoryId"
            :productCategoryImage="productCategory.productCategoryImage"
            :productCategoryName="productCategory.productCategoryName"
            @click="openSubcategory(productCategory.productCategoryId)"
        />
    </div>
</template>

<script>
import sidebarCard from "../UI/sidebarCard.vue";

export default {
    components: {
        sidebarCard,
    },
    props: {
        productCategoryData: {
            type: Object,
        },
    },
    methods: {
        openSubcategory(categoryId) {
            this.$emit("openSubcategory", categoryId);
        },
    },
};
</script>

<style scoped>
.sidebarcard-wrapper {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
}
</style>
