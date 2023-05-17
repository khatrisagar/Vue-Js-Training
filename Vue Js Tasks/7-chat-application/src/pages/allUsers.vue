<template>
    <div class="card-wrapper">
        <button @click="registerUser" class="registerUser">Register</button>
        <userCard
            v-for="user in userData"
            :key="user.id"
            :user="user"
            :userData="userData"
            :loggedInUserId="loggedInUserId"
            @addFriend="addFriend"
        />
    </div>
    <div v-if="isShowRegistrationForm">
        <userRegisteration @addUser="addUser" />
    </div>
</template>

<script>
import userCard from "@/components/UI/userCard.vue";
import userRegisteration from "@/components/UI/userRegistration.vue";

export default {
    components: {
        userCard,
        userRegisteration,
    },
    data() {
        return {
            isShowRegistrationForm: false,
            userData: null,
            test: [
                {
                    id: 1,
                    firstName: "Sagar",
                    lastName: "Khatri",
                    contactNumber: "9999999999",
                    state: "Gujrat",
                    city: "Ahmedabad",
                    friends: [],
                },
                {
                    id: 2,
                    firstName: "Dhyey",
                    lastName: "Patel",
                    contactNumber: "9999999999",
                    state: "Gujrat",
                    city: "Ahmedabad",
                    friends: [],
                },
                {
                    id: 3,
                    firstName: "kaushal",
                    lastName: "Gandhi",
                    contactNumber: "9999999999",
                    state: "Gujrat",
                    city: "Ahmedabad",
                    friends: [],
                },
                {
                    id: 4,
                    firstName: "Jay",
                    lastName: "Thakkar",
                    contactNumber: "9999999999",
                    state: "Gujrat",
                    city: "Ahmedabad",
                    friends: [],
                },
            ],
            loggedInUserId: null,
            loggedInUserData: null,
        };
    },
    created() {
        this.userData =
            JSON.parse(localStorage.getItem("userData")) || this.test;
        this.loggedInUserId =
            JSON.parse(localStorage.getItem("user_at")).id || [];
        this.loggedInUserData = this.userData.find(
            (user) => user.id === this.loggedInUserId
        );
    },
    methods: {
        addFriend(userID) {
            const findUser = this.userData.find((user) => user.id === userID);
            console.log(findUser);
            findUser.friends.push(this.loggedInUserId);
            this.loggedInUserData.friends.push(userID);

            localStorage.setItem("userData", JSON.stringify(this.userData));
        },
        registerUser() {
            this.isShowRegistrationForm = true;
        },
        addUser(userObject) {
            this.userData.push(userObject);
            localStorage.setItem("userData", JSON.stringify(this.userData));
        },
    },
};
</script>

<style scoped>
.card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.registerUser {
    width: 100px;
    border: none;
    padding: 6px 8px;
    box-shadow: 0px 0px 3px black;
    border-radius: 4px;
}
</style>
