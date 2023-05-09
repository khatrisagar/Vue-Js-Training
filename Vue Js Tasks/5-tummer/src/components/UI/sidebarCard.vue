<template>
    <div class="home-product-category-card">
        <div class="home-product-category-img-container">
            <img
                class="product-img"
                :src="productCategoryImage"
                alt="product-category-img"
            />
        </div>
        <div class="home-product-category-name-container">
            <p class="product-name">{{ productCategoryName }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        productCategoryImage: {
            type: String,
        },
        productCategoryName: {
            type: String,
        },
    },
};
</script>

<style scoped>
.home-product-category-card {
    background-color: rgb(201, 201, 201);
    width: 250px;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0.5rem;
    border-radius: 5px;
    column-gap: 1rem;
    color: rgb(54, 54, 54);
}

.product-img {
    width: 50px;
}

.product-name {
    font-size: 18px;
}
</style>
