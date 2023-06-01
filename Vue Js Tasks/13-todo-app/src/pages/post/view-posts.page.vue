<template>
    <h1>------All Posts------</h1>
    <div class="card-container">
        <commonCard v-for="post in getPosts" :key="post.id" :post="post" />
    </div>
</template>

<script>
import commonCard from "@/components/common/common-post-card.component.vue";

// services
import { getAllPosts } from "@/services/post/post.service";
import { mapActions, mapGetters } from "vuex";

export default {
    components: {
        commonCard,
    },

    async created() {
        if (this.getPosts.length === 0) {
            try {
                const allPosts = await getAllPosts();
                this.setPosts(allPosts.data);
            } catch (error) {
                this.$router.push({ name: 404 });
            }
        }
    },
    data() {
        return {
            posts: null,
        };
    },
    methods: {
        ...mapActions({ setPosts: "setPosts" }),
    },
    computed: {
        ...mapGetters({ getPosts: "getPosts" }),
    },
};
</script>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
