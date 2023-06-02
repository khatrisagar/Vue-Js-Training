<template>
    <div class="header-wrapper">
        <router-link :to="{ name: 'home' }">View Posts</router-link>
        <router-link :to="{ name: 'addPost' }">Add Post</router-link>
    </div>
</template>

<style scoped>
.header-wrapper {
    display: flex;
    gap: 1rem;
}
a {
    text-decoration: none;
}
</style>
