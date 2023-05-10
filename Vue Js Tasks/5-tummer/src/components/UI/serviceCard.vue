<template>
    <div>
        <div class="service-card">
            <h3 class="service-category-name">{{ name }}</h3>
            <p class="service-category-detail">
                {{ detail }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
        },
        detail: {
            type: String,
        },
    },
};
</script>

<style scoped>
.service-card {
    width: 500px;
}

.service-category-name {
    color: rgb(24, 24, 24);
    margin: 0;
}

.service-category-detail {
    color: rgb(46, 46, 46);
    margin-top: 0.4rem;
}
</style>
