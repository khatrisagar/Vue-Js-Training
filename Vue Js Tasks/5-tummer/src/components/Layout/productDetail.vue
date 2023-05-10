<template>
    <p @click="gotToProductCategory">Back</p>
    <br />
    <div class="view-item-container">
        <div v-for="info in itemDetails" :key="info.id">
            <h3>Product Name:-{{ info.name }}</h3>
            <p>Product Price:- {{ info.price }}</p>
            <img :src="info.image" alt="product image" />
            <p>Rating: {{ info.rating }}/5</p>
            <p>Country: {{ info.origin }}</p>
            <p>Product Description:- {{ info.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        itemDetails: {
            type: Object,
        },
    },
    methods: {
        gotToProductCategory() {
            this.$emit("gotToProductCategory");
        },
    },
};
</script>

<style scoped>
img {
    width: 200px;
}
</style>
