<template>
    <h1>Test view</h1>
    <button @click="goToHome">Go To Home</button>
</template>

<script>
export default {
    methods: {
        goToHome() {
            this.$router.push("/home");
            // this.$router.back();
        },
    },
};
</script>
