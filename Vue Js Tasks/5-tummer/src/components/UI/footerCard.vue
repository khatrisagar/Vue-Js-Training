<template>
    <div class="card-container">
        <div class="card-label">
            <P>{{ cardLabel }}</P>
        </div>
        <div>
            <ul class="card-links">
                <li v-for="link in cardLinks" :key="link">{{ link }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        footerServicesCard: {
            type: Object,
        },
    },
    data() {
        return {
            cardLabel: this.footerServicesCard.footerLabel,
            cardLinks: this.footerServicesCard.footerLinks,
        };
    },
};
</script>

<style scoped>
.card-label {
    font-size: 24px;
    color: green;
    font-weight: 800;
    display: flex;
}
ul {
    list-style: none;
}
.card-links {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    row-gap: 0.5rem;
}
.card-container {
    display: flex;
    flex-direction: column;
}
</style>
