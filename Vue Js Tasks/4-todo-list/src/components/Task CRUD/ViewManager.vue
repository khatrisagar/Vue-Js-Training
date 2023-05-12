<template>
    <TheHeader
        @addUser="addUser"
        @viewData="viewData"
        :addUserBtn="currentView === 'AddUser' ? 'active' : ''"
        :viewDataBtn="currentView === 'ViewUsers' ? 'active' : ''"
    />
    <component :is="currentView"></component>
</template>

<script>
import TheHeader from "../Layout/TheHeader.vue";
import ViewUsers from "./ViewUsers.vue";
import AddUser from "./AddUser.vue";

export default {
    components: {
        TheHeader,
        ViewUsers,
        AddUser,
    },
    data() {
        return {
            currentView: "ViewUsers",
        };
    },
    methods: {
        addUser() {
            this.currentView = "AddUser";
        },
        viewData() {
            this.currentView = "ViewUsers";
        },
    },
};
</script>

<style scoped></style>
