<template>
    <v-card width="600" elevation="2" class="pa-6 bg-primary mb-2">
        <p>Name- {{ comment.name }}</p>
        <p>Email- {{ comment.email }}</p>
        <p>Comment- {{ comment.body }}</p>
    </v-card>
</template>

<script>
export default {
    props: {
        comment: {
            type: Object,
        },
    },
};
</script>

<style scoped>
.comments-wrapper {
    border: 1px solid black;
    width: 400px;
    border-radius: 4px;
    padding: 1rem;
}
</style>
