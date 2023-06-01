<template>
    <nav>
        <router-link :to="{ name: 'home' }">View Posts</router-link> |
        <router-link :to="{ name: 'addPost' }">Create Post</router-link>
    </nav>
    <router-view />
</template>

<style></style>
