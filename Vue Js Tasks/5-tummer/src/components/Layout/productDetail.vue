<template>
    <div class="view-item-container">
        <div v-for="info in itemDetails" :key="info.id">
            <p>Product Name:-{{ info.name }}</p>
            <p>Product Price:- {{ info.price }}</p>
            <img :src="info.image" alt="product image" />
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
};
</script>
