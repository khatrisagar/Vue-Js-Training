<template>
    <router-view :v-slot="{ Component }"></router-view>
    <transition name="routes" mode="out-in">
        <component :is="Component"></component>
    </transition>
</template>

<script>
export default {
    name: "App",
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>

<style>
.routes-enter-active,
.routes-leave-active {
    animation: bounce-in 0.5s;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}
</style>
