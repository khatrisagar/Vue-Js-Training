<template>
    <div class="site-wrapper">
        <appHeader />
        <div class="content-wrapper">
            <router-view></router-view>
        </div>
        <appFooter />
    </div>
</template>

<script>
import appHeader from "@/components/appHeader.vue";
import appFooter from "@/components/appFooter.vue";
export default {
    name: "App",
    components: {
        appHeader,
        appFooter,
    },
};
</script>

<style scoped></style>
