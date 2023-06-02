<template>
    <h1>------All Posts------</h1>
    <div class="card-container">
        <commonCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<script>
import commonCard from "@/components/commonCard.vue";

// services
import { getAllPosts } from "@/services/posts";

export default {
    components: {
        commonCard,
    },

    async created() {
        try {
            const allPosts = await getAllPosts();
            this.posts = allPosts.data;
        } catch (error) {
            this.$router.push({ name: 404 });
        }
    },
    data() {
        return {
            posts: null,
        };
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
