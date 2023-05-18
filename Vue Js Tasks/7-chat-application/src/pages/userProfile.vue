<template>
    <h1>User Profile</h1>
    <div class="user-profile-card">
        <p>Name:- {{ userProfileData.firstName }}</p>
        <p>Surname- {{ userProfileData.lastName }}</p>
        <p>Contact Number:- {{ userProfileData.contactNumber }}</p>
        <p>State:- {{ userProfileData.state }}</p>
        <p>City:- {{ userProfileData.city }}</p>
        <button
            v-if="userProfileData.friends.includes(loggedInUserId)"
            class="button-red"
            @click="removeFriend(userProfileData.id)"
        >
            Remove Friend
        </button>
        <button
            v-else
            @click="addFriend(userProfileData.id)"
            class="button-green"
        >
            Add Friend
        </button>
        <router-link
            :to="{ name: 'chatRoom', params: { id: userProfileData.id } }"
            >Chat</router-link
        >
    </div>
</template>

<script>
export default {
    data() {
        return {
            userProfileData: null,
            userData: null,
            loggedInUserId: null,
            loggedInUserData: null,
        };
    },
    props: {
        userID: {
            type: String,
            required: true,
        },
    },
    created() {
        this.loggedInUserId = JSON.parse(localStorage.getItem("user_at")).id;
        this.userData = JSON.parse(localStorage.getItem("userData"));
        this.loggedInUserData = this.userData.find(
            (user) => user.id == this.loggedInUserId
        );
        this.userProfileData = this.userData.find(
            (user) => user.id == this.$route.params.id
        );
    },

    methods: {
        addFriend(userID) {
            //  to add in friends friend list
            const findUser = this.userData.find((user) => user.id === userID);
            findUser.friends.push(this.loggedInUserId);

            // to add in users friend list
            this.loggedInUserData.friends.push(userID);
            localStorage.setItem("userData", JSON.stringify(this.userData));
        },
        removeFriend(userID) {
            // to remove from friends friend list
            const findUser = this.userData.find((user) => user.id === userID);
            const loggedInUserIndex = findUser.friends.findIndex(
                (friendID) => friendID === this.loggedInUserId
            );
            findUser.friends.splice(loggedInUserIndex, 1);

            // to remove from users friend list
            const userIndex = this.loggedInUserData.friends.findIndex(
                (loggendInUserFriendId) => {
                    return loggendInUserFriendId === userID;
                }
            );
            this.loggedInUserData.friends.splice(userIndex, 1);
            localStorage.setItem("userData", JSON.stringify(this.userData));
        },
    },
};
</script>

<style scoped>
.user-profile-card {
    box-shadow: 0px 0px 3px black;
    border-radius: 4px;
    padding: 1rem;
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}
.button-red {
    background-color: red;
    border: none;
    padding: 0.3rem;
    border-radius: 4px;
    font-size: 0.8rem;
    color: white;
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
