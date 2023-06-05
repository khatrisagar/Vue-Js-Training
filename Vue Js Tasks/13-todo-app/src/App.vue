<template>
    <appHeader />
    <div class="content-wrapper"><router-view /></div>
</template>

<script lang="ts">
import appHeader from "@/components/common/common-header.component.vue";

export default {
    components: {
        appHeader,
    },
};
</script>

<style scoped>
.content-wrapper {
    margin-top: 60px;
}
</style>
