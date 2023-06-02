<template>
    <h1>This is the single post</h1>
    <div v-if="!isLoader">
        <commonCard :post="post" />
        <button @click="deletePost(post.id)">Delete Post</button>

        <div>
            <p>comments</p>
            <commentsCard
                v-for="comment in comments"
                :key="comment.id"
                :comment="comment"
            />
        </div>
    </div>
</template>

<script>
import commentsCard from "@/components/commentsCard.vue";

// services
import { getPost, getPostComments, deletePost } from "@/services/posts";
import commonCard from "@/components/commonCard.vue";

export default {
    components: {
        commentsCard,
        commonCard,
    },
    async created() {
        try {
            const postData = await Promise.all([
                getPost(this.$route.params.postId),
                getPostComments(this.$route.params.postId),
            ]);

            this.post = postData[0].data;
            this.comments = postData[1].data;
            this.isLoader = false;
        } catch (error) {
            this.$router.push({ name: "404" });
        }
    },
    data() {
        return {
            isLoader: true,
            post: null,
            comments: null,
        };
    },
    methods: {
        async deletePost(postId) {
            console.log(postId);
            try {
                const postData = await deletePost(postId);
                console.log("delpostData", postData);
                this.$router.push({ name: "home" });
            } catch (error) {
                this.$router.push({ name: "home" });
            }
        },
    },
};
</script>
