<template>
    <div class="link-container">
        <router-link class="routing-link" :to="`/${routingPath}`">{{
            routingName
        }}</router-link>
    </div>
</template>

<script>
export default {
    props: {
        routingName: {
            type: String,
        },
        routingPath: {
            type: String,
        },
    },
};
</script>

<style scoped>
.routing-link {
    display: inline-block;
    border: 1px solid rgb(145, 145, 145);
    color: rgb(53, 53, 53);
    padding: 4px 8px;
    border-radius: 4px;
    width: 200px;
}
.router-active-link {
    border: 1px solid black;
}
.link-container {
    padding: 0.4rem;
}
</style>
