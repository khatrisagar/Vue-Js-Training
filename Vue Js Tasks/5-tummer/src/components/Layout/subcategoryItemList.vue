<template>
    <div class="subcategory-product-card-container">
        <subcategoryCard
            v-for="item in SubcategoryItemsData"
            :key="item.id"
            :subcategoryImage="item.image"
            :subcategoryName="item.name"
            :price="item.price"
            @click="viewItem(item.id)"
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
        SubcategoryItemsData: {
            type: Object,
        },
    },
    methods: {
        viewItem(itemId) {
            this.$emit("viewItem", itemId);
        },
    },
};
</script>

<style scoped>
.subcategory-product-card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
