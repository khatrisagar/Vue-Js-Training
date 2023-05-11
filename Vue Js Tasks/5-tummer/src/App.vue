<template>
    <appHeader class="appHeader" @currentTab="currentTab" />
    <div
        :style="{
            display: currentView === 'products' ? 'block' : 'none',
        }"
    >
        <appHomePageVue />
    </div>
    <div
        :style="{
            display: currentView === 'services' ? 'block' : 'none',
        }"
    >
        <appServicesSectionVue />
    </div>
    <appFooter :footerCardData="footerCardData" />
</template>

<script>
import appHeader from "./components/Layout/appHeader.vue";
import appFooter from "./components/Layout/appFooter.vue";
import appHomePageVue from "./components/pages/appHomePage.vue";
import appServicesSectionVue from "./components/pages/appServicesSection.vue";
export default {
    name: "App",
    components: {
        appHeader,
        appFooter,
        appHomePageVue,
        appServicesSectionVue,
    },
    data() {
        return {
            currentView: "products",
            footerCardData: [
                {
                    id: "1",
                    footerLabel: "Service",
                    footerLinks: {
                        1: "Klantenservice",
                        2: "Reparatie of storing melden",
                        3: "Cadeaukaartsaldo opvragen",
                        4: "Over Tummers",
                        5: "Cadeaukaartsaldo opvragen",
                        6: "Over Tummers",
                    },
                },
                {
                    id: "2",
                    footerLabel: "Service2",
                    footerLinks: {
                        1: "fsd",
                        2: "fsd of storfsding fsd",
                        3: "fsd opvragen",
                        4: "Over Tummefsdrs",
                        5: "fsdf fds",
                        6: "Ovfds   er fsd",
                    },
                },
                {
                    id: "3",
                    footerLabel: "Service3",
                    footerLinks: {
                        1: "dfsgdfgfg ewswd asw",
                        2: "fgfdgdfg df eas f",
                        3: "fgdfgdfsd fgdfg",
                        4: "Overgdf gdfgdfTummefsdrs",
                        5: "gfdgfdgdf fds",
                        6: "Ovfds gfddssfd fsd",
                    },
                },
            ],
        };
    },
    methods: {
        currentTab(view) {
            this.currentView = view;
        },
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    width: 1170px;
    margin: 0 auto;
    padding: 1rem 0;
}
</style>
