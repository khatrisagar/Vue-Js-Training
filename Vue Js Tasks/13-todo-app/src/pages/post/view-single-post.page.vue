<template>
    <div v-if="!isLoader" class="d-flex flex-column align-center">
        <commonCard :post="getCurrentPost.postData" />

        <div>
            <p class="text-h5">Comments</p>
            <commentsCard
                v-for="comment in getCurrentPost.commnetsData"
                :key="comment.id"
                :comment="comment"
            />
        </div>
    </div>
</template>

<script>
import commentsCard from "@/components/common/common-comment-card.component.vue";

// services
import { getPostComments } from "@/services/post/post.service";
import commonCard from "@/components/common/common-post-card.component.vue";
import { mapActions, mapGetters } from "vuex";
import { setStore } from "@/utils";

export default {
    components: {
        commentsCard,
        commonCard,
    },
    async created() {
        try {
            // const postInfo = await Promise.all([
            //     getPost(this.$route.params.postId),
            //     getPostComments(this.$route.params.postId),
            // ]);
            await setStore();
            const postComments = await getPostComments(
                this.$route.params.postId
            );
            const postInfo = this.getPosts.find((post) => {
                return post.id == this.$route.params.postId;
            });
            if (!postInfo) {
                this.$router.push({ name: "404" });
            } else {
                this.setCurrentPost({
                    postData: postInfo,
                    commnetsData: postComments.data,
                });
                console.log("getCurr", this.getCurrentPost);
                this.isLoader = false;
            }
        } catch (error) {
            console.log(error);
            this.$router.push({ name: "404" });
        }
    },
    unmounted() {
        this.setCurrentPost({
            postData: {},
            commnetsData: {},
        });
    },
    data() {
        return {
            isLoader: true,
        };
    },
    methods: {
        ...mapActions({ setCurrentPost: "post/setCurrentPost" }),
    },
    computed: {
        ...mapGetters({
            getPosts: "post/getPosts",
            getCurrentPost: "post/getCurrentPost",
        }),
    },
};
</script>
