<template>
    <div class="service-detail-wrapper">
        <serviceCard
            v-for="service in serviceCategorydata"
            :key="service.id"
            :name="service.name"
            :detail="service.detail"
        />
    </div>
</template>

<script>
import serviceCard from "../UI/serviceCard.vue";

export default {
    components: {
        serviceCard,
    },
    props: {
        serviceCategorydata: {
            type: Object,
        },
    },
};
</script>
