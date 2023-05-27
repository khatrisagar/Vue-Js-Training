<template>
    <div class="site-wrapper">
        <appHeader />
        <headerAlert
            v-if="isShowHeaderAlert"
            @closeHeaderAlert="closeHeaderAlert"
        />
        <div class="content-wrapper">
            <router-view></router-view>
        </div>
        <appFooter />
    </div>
</template>

<script>
import appHeader from "@/components/appHeader.vue";
import appFooter from "@/components/appFooter.vue";
import headerAlert from "@/components/UI/headerAlert.vue";
export default {
    name: "App",
    components: {
        appHeader,
        appFooter,
        headerAlert,
    },
    data() {
        return {
            isShowHeaderAlert: true,
        };
    },
    methods: {
        closeHeaderAlert() {
            this.isShowHeaderAlert = false;
        },
    },
};
</script>

<style scoped>
.content-wrapper {
    min-height: 90vh;
}
</style>
