<template>
    <div class="card-wrapper">
        <div class="product-category-img-container">
            <img
                class="category-img"
                :src="productCategory.image"
                alt="product-category-img"
            />
        </div>
        <div class="product-category-name-container">
            <p class="category-name">{{ productCategory.name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        productCategory: {
            type: Object,
        },
    },
};
</script>

<style scoped>
.card-wrapper {
    width: 250px;
    box-shadow: 0px 0px 2px black;
    background-color: var(--dim-white);
    padding: 0.5rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    flex-direction: row;
    column-gap: 1rem;
}
.category-img {
    width: 50px;
}
</style>
