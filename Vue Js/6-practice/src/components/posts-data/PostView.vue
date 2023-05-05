<template>
    <div class="posts-container">
        <PostData
            v-for="post in posts"
            :key="post.id"
            :id="post.id"
            :title="post.title"
            :description="post.description"
            :link="post.link"
        />
    </div>
</template>

<script>
import PostData from "./PostData.vue";
export default {
    components: {
        PostData,
    },
    inject: ["posts"],
};
</script>
