<template>
    <div class="application-wrapper">
        <div class="left-container">
            <appSidebar />
        </div>
        <div class="right-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import appSidebar from "./components/UI/appSidebar.vue";

export default {
    name: "App",
    components: {
        appSidebar,
    },
};
</script>

<style scoped>
.left-container {
    width: 20%;
}
.right-container {
    position: absolute;
    left: 216px;
    padding: 1rem;
    width: 80%;
    min-height: 100vh;
}
</style>
