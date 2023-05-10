<template>
    <div class="service-section-sidebar">
        <div
            class="service-link"
            v-for="service in serviceData"
            :key="service.id"
            @click="exploreService(service.id)"
        >
            <p class="service-link-text">{{ service.name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        serviceData: {
            type: Object,
        },
    },
    methods: {
        exploreService(serviceId) {
            this.$emit("exploreService", serviceId);
        },
    },
};
</script>

<style scoped>
.service-section-sidebar {
    border: 1px solid green;
    width: 216px;
}

.service-link {
    width: 200px;
    border-bottom: 1px solid black;
    padding: 8px;
    cursor: pointer;
}

.service-link-text {
    margin: 0;
    color: rgb(78, 78, 78);
}

.service-link:active {
    border: 1.5px solid green;
}
</style>
