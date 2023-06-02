<template>
    <v-card width="600" elevation="2" class="pa-6 bg-primary">
        <p>Id- {{ post.id }}</p>
        <h3>
            <strong> {{ post.title }}</strong>
        </h3>
        <p class="text-primaryText">{{ post.body }}</p>

        <div class="d-flex flex-row justify-space-between bg-black rounded">
            <v-Btn @click="viewPost(post.id)">View Post</v-Btn>
            <V-BtnSecondary @click="deletePost(post.id)"
                >Delete Post</V-BtnSecondary
            >
            <V-BtnTertiary @click="editPost(post.id)">Edit Post</V-BtnTertiary>
        </div>
    </v-card>
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
