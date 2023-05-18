<template>
    <div class="card-wrapper">
        <userCard
            v-for="user in friendsData"
            :key="user.id"
            :user="user"
            :loggedInUserId="loggedInUserId"
        />
    </div>
</template>
<script>
import userCard from "@/components/UI/userCard.vue";

export default {
    components: {
        userCard,
    },
    data() {
        return {
            loggedInUserId: null,
            loggedInUserData: null,
            friendsData: null,
        };
    },
    created() {
        this.loggedInUserId = JSON.parse(localStorage.getItem("user_at")).id;
        const userData = JSON.parse(localStorage.getItem("userData")) || [];
        this.loggedInUserData = userData.find(
            (user) => user.id == this.loggedInUserId
        );

        this.friendsData = userData.filter((user) =>
            this.loggedInUserData.friends.includes(user.id)
        );
    },
};
</script>

<style scoped>
.card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
