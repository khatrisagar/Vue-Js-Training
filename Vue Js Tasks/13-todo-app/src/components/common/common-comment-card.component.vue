<template>
    <div class="comments-wrapper">
        <p>Name- {{ comment.name }}</p>
        <p>Email- {{ comment.email }}</p>
        <p>Comment- {{ comment.body }}</p>
    </div>
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
