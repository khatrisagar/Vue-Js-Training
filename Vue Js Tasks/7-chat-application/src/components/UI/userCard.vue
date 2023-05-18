<template>
    <router-link :to="`/users/${user.id}`">
        <div class="user-card" v-if="user.id !== loggedInUserId">
            <p>{{ user.firstName }} {{ user.lastName }}</p>
            <button
                v-if="!user.friends.includes(loggedInUserId)"
                @click="addFriend(user.id)"
                class="button-green"
            >
                Add Friend
            </button>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
        },
        loggedInUserId: {
            type: Number,
        },
    },
    methods: {
        addFriend(userID) {
            this.$emit("addFriend", userID);
        },
    },
};
</script>

<style scoped>
a {
    width: 300px;
}
.user-card {
    width: 300px;
    box-shadow: 0px 0px 3px black;
    padding: 1rem;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
p {
    color: black;
}
.button-green {
    background-color: green;
    border: none;
    padding: 0.3rem;
    border-radius: 4px;
    font-size: 0.8rem;
    color: white;
}
</style>
