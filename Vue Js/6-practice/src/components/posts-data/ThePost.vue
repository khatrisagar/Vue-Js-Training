<template>
    <base-card>
        <base-button
            @click="setTab('postView')"
            :mode="currentTab === 'postView' ? null : 'secondaryBtn'"
            >View Posts</base-button
        >
        <base-button
            @click="setTab('addPost')"
            :mode="currentTab === 'addPost' ? null : 'secondaryBtn'"
            >Add Posts</base-button
        >
    </base-card>
    <component :is="currentTab"></component>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";

import PostView from "./PostView.vue";
import AddPost from "./AddPost.vue";

export default {
    provide() {
        return {
            posts: this.posts,
            addPost: this.addPost,
            deletePost: this.deletePost,
        };
    },
    components: {
        BaseButton,
        PostView,
        AddPost,
    },
    data() {
        return {
            currentTab: "postView",
            posts: [
                {
                    id: "1",
                    title: `I Don't Know`,
                    description:
                        "Just Creating simple project to learn a VueJs.",
                    link: "https://vuejs.org/",
                },
                {
                    id: "2",
                    title: `I Don't Know 2`,
                    description: "No description i will add it later.",
                    link: "https://vuejs.org/",
                },
            ],
        };
    },
    methods: {
        setTab(tab) {
            this.currentTab = tab;
        },
        addPost(title, description, link) {
            const newPost = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: link,
            };

            this.posts.unshift(newPost);

            this.currentTab = "postView";
        },
        deletePost(id) {
            const postId = this.posts.findIndex((post) => post.id === id);
            // console.log(postId, id);
            this.posts.splice(postId, 1);
        },
    },
};
</script>
