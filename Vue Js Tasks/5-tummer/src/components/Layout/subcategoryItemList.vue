<template>
    <div class="product-list-container">
        <productCard
            v-for="item in SubcategoryItemsData"
            :key="item.id"
            :subcategoryImage="item.image"
            :subcategoryName="item.name"
            :price="item.price"
            @click="productDetail(item.id)"
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
        SubcategoryItemsData: {
            type: Object,
        },
    },
    methods: {
        productDetail(itemId) {
            this.$emit("productDetail", itemId);
        },
    },
};
</script>

<style scoped>
.product-list-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
