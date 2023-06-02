<template>
    <v-layout>
        <v-app-bar density="compact" color="black">
            <V-Btn class="font-weight-bold">
                <router-link
                    class="text-decoration-none text-white"
                    :to="{ name: 'home' }"
                    >View Posts</router-link
                >
            </V-Btn>
            <V-Btn class="font-weight-bold">
                <router-link
                    class="text-decoration-none text-white"
                    :to="{ name: 'addPost' }"
                    >Create Post</router-link
                >
            </V-Btn>
        </v-app-bar>
    </v-layout>
</template>
