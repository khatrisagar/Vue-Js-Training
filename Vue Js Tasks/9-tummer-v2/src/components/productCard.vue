<template>
    <div class="card-wrapper">
        <div class="sub-category-image-container">
            <img
                class="card-image"
                :src="product.image"
                alt="sub category images"
            />
        </div>
        <div>
            <p>{{ product.name }}</p>
            <p v-if="product.price">Price-{{ product.price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {},
    props: {
        product: {
            type: Object,
        },
    },
};
</script>

<style scoped>
.card-wrapper {
    border: 1px solid black;
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
}
.card-image {
    height: 150px;
}
</style>
