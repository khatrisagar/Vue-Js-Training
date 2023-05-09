<template>
    <footer class="container">
        <div class="footer-container">
            <footerCard
                v-for="footerServicesCard in footerCardData"
                :key="footerServicesCard.id"
                :footerServicesCard="footerServicesCard"
            />
        </div>
    </footer>
</template>

<script>
import footerCard from "../UI/footerCard.vue";

export default {
    components: {
        footerCard,
    },
    props: {
        footerCardData: {
            type: Object,
        },
    },
};
</script>

<style scoped>
footer {
    display: flex;
}
.footer-container {
    display: flex;
    flex-direction: row;
    column-gap: 3rem;
}
</style>
