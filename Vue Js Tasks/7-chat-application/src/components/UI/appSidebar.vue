<template>
    <div class="sidebar-wrapper">
        <div class="sidebar-cards-wrapper" v-for="route in routes" :key="route">
            <sidebarCard
                :routingName="route.routingName"
                :routingPath="route.routingPath"
            />
        </div>
    </div>
</template>

<script>
import sidebarCard from "@/components/UI/sidebarCard.vue";
export default {
    components: {
        sidebarCard,
    },
    data() {
        return {
            routes: [
                {
                    routingName: "Chat Room",
                    routingPath: "chat-room",
                },
                {
                    routingName: "users",
                    routingPath: "users",
                },
                {
                    routingName: "friends",
                    routingPath: "friends",
                },
            ],
        };
    },
};
</script>

<style scoped>
.sidebar-wrapper {
    position: absolute;
    border: 1px solid black;
    min-height: 100vh;
}
</style>
