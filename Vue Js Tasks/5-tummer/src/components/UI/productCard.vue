<template>
    <div class="product-subcategory-card">
        <div class="subacategory-image-container">
            <img
                class="subacategory-image"
                :src="subcategoryImage"
                alt=" Product Sub category"
            />
        </div>
        <div class="subcategory-name-container">
            <p>{{ subcategoryName }}</p>
            <p>{{ price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        subcategoryImage: {
            type: String,
            required: true,
        },
        subcategoryName: {
            type: String,
            required: true,
        },
        price: {
            type: String,
        },
    },
};
</script>

<style scoped>
.product-subcategory-card {
    border: 1px solid rgb(156, 156, 156);
    width: 200px;
    height: 230px;
    padding: 0.3rem;
    border-radius: 5px;
}
.subacategory-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.subacategory-image {
    width: 150px;
}

.subcategory-name-container {
    display: flex;
    align-items: center;
    padding-top: 2rem;
    flex-direction: column;
}
</style>
