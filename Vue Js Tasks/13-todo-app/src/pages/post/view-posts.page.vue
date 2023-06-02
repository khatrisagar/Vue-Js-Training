<template>
    <div class="d-flex flex-column align-center">
        <v-card class="pages-container pa-2 bg-black d-flex flex-wrap">
            <div v-for="page in getPages" :key="page">
                <router-link :to="{ name: 'home', query: { page: page } }">
                    <v-CommonButton class="pa-2 rounded">
                        {{ page }}</v-CommonButton
                    >
                </router-link>
            </div>
        </v-card>
        <div class="card-container">
            <commonCard
                v-for="post in getPostForPage"
                :key="post.id"
                :post="post"
            />
        </div>
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
            page: this.$route.query.page || 1,
        };
    },
    methods: {
        ...mapActions({ setPosts: "post/setPosts" }),
    },
    computed: {
        ...mapGetters({ getPosts: "post/getPosts" }),
        getPostForPage() {
            let posts = [];
            for (let postIndex in this.getPosts) {
                const page = parseInt(this.$route.query.page);
                if (page) {
                    if (postIndex >= (page - 1) * 10 && postIndex < page * 10) {
                        posts.push(this.getPosts[postIndex]);
                    }
                } else {
                    posts = this.getPosts;
                }
            }

            return posts;
        },
        getPages() {
            let pages = [];
            const length = Math.ceil(this.getPosts.length / 10);
            for (let i = 1; i <= length; i++) {
                pages.push(i);
            }
            return pages;
        },
    },
};
</script>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.pages-container {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
}
.pages-container > div > a {
    padding: 0.5rem;
}
</style>
