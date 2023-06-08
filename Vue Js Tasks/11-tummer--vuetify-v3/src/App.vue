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

import { ref } from "vue";
export default {
    name: "App",
    components: {
        appHeader,
        appFooter,
        headerAlert,
    },
    setup() {
        const isShowHeaderAlert = ref(true);

        const closeHeaderAlert = () => {
            isShowHeaderAlert.value = false;
        };
    },
};
</script>

<style scoped>
.content-wrapper {
    min-height: 90vh;
}
</style>
