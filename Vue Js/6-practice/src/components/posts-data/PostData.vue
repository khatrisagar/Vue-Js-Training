<template>
    <base-card class="post-card-wrapper">
        <div class="post-header">
            <h1 class="post-title">{{ title }}</h1>
            <button @click="deletePost(id)" class="post-delete">Delete</button>
        </div>
        <div class="post-content">
            <p class="post-description">{{ description }}</p>

            <p class="post-link"><a :href="link" target="_blank">Link</a></p>
        </div>
    </base-card>
</template>

<script>
import BaseCard from "../UI/BaseCard.vue";

export default {
    inject: ["deletePost"],
    components: {
        BaseCard,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
    },
};
</script>
<style scoped>
a {
    text-decoration: none;
    color: rgb(66, 66, 66) !important;
    font-weight: 900;
}

.post-card-wrapper {
    margin: 1rem;
    padding: 1rem;
    border: 1px solid rgb(119, 119, 119);
    width: 500px;
    border-radius: 8px;
    box-shadow: 0px 0px 3px rgb(133, 133, 133);
}

.post-header {
    display: flex;
    justify-content: space-between;
}
.post-content {
    margin-top: 1rem;
}
.post-delete {
    border: none;
    border-radius: 8px;
    padding: 4px 6px;
    box-shadow: 0px 0px 3px rgb(102, 102, 102);
}
.post-description {
    margin-bottom: 0.7rem;
}
.post-link {
    border: 1px solid rgb(117, 117, 117);
    background-color: aliceblue;
    display: inline;
    padding: 4px 6px;
    border-radius: 4px;
}
</style>
