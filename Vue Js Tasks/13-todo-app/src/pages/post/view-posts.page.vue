<template>
    <h1>------All Posts------</h1>
    <div class="card-container">
        <commonCard v-for="post in getPosts" :key="post.id" :post="post" />
    </div>
</template>

<script>
import commonCard from "@/components/common/common-post-card.component.vue";

// services
import { mapActions, mapGetters } from "vuex";
import { setStore } from "@/utils";

export default {
    components: {
        commonCard,
    },

    created() {
        setStore();
    },
    data() {
        return {
            posts: null,
        };
    },
    methods: {
        ...mapActions({ setPosts: "post/setPosts" }),
    },
    computed: {
        ...mapGetters({ getPosts: "post/getPosts" }),
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
