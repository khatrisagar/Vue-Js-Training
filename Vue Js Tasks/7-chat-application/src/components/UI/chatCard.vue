<template>
    <div class="chat-card">{{ userMsg }}</div>
</template>

<script>
export default {
    props: {
        userMsg: {
            type: String,
        },
    },
};
</script>

<style scoped>
.chat-card {
    display: inline-block;
    /* width: 200px; */
    border: 0.4px solid rgb(187, 187, 187);
    border-radius: 3px;
    padding: 4px;
}
</style>
