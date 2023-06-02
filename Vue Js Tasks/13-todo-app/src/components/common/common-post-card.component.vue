<template>
    <div class="card-wrapper">
        <p>Id- {{ post.id }}</p>
        <p>Title- {{ post.title }}</p>
        <p>Description- {{ post.body }}</p>
        <button @click="viewPost(post.id)">View Post</button>
        <button @click="deletePost(post.id)">Delete Post</button>
        <button @click="editPost(post.id)">Edit Post</button>
    </div>
</template>

<script>
import { deletePost } from "@/services/post/post.service";
import { mapActions, mapGetters } from "vuex";
export default {
    props: {
        post: {
            type: Object,
        },
    },

    methods: {
        ...mapActions({ setPosts: "post/setPosts" }),

        viewPost(postId) {
            this.$router.push({ name: "post", params: { postId: postId } });
        },
        async deletePost(postId) {
            console.log(postId);
            try {
                const postData = await deletePost(postId);
                console.log("delpostData", postData);
                if (postData.status === 200) {
                    const posts = this.getPosts.filter(
                        (post) => post.id !== postId
                    );
                    this.setPosts(posts);
                }
                this.$router.push({ name: "home" });
            } catch (error) {
                this.$router.push({ name: "home" });
            }
        },
        editPost(postId) {
            this.$router.push({ name: "editPost", params: { postId: postId } });
        },
    },
    computed: {
        ...mapGetters({ getPosts: "post/getPosts" }),
    },
};
</script>

<style scoped>
.card-wrapper {
    border: 1px solid black;
    width: 500px;
}
</style>
