<template>
    <div class="card-wrapper" @click="viewPost(post.id)">
        <p>Id- {{ post.id }}</p>
        <p>Title- {{ post.title }}</p>
        <p>Description- {{ post.body }}</p>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
        },
    },

    methods: {
        viewPost(postId) {
            this.$router.push({ name: "post", params: { postId: postId } });
        },
    },
};
</script>

<style scoped>
.card-wrapper {
    border: 1px solid black;
    width: 500px;
}
</style>
