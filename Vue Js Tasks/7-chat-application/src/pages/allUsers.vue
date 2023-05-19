<template>
    <div class="card-wrapper">
        <button @click="registerUser" class="registerUser">Register</button>
        <button @click="onCreateGroup" class="registerUser">
            Create Group
        </button>
        <userCard
            v-for="user in userData"
            :key="user.id"
            :user="user"
            :loggedInUserId="loggedInUserId"
            @addFriend="addFriend"
        />
    </div>
    <transition name="registrationForm">
        <div class="form-container" v-if="isShowRegistrationForm">
            <userRegisteration @addUser="addUser" @closeForm="closeForm" />
        </div>
    </transition>
    <transition name="createGroupForm">
        <div class="form-container" v-if="isShowGroupForm">
            <createGroup
                :userData="userData"
                :loggedInUserId="loggedInUserId"
                @createGroup="createGroup"
                @closeForm="closeCreateGroup"
            />
        </div>
    </transition>
</template>

<script>
import userCard from "@/components/UI/userCard.vue";
import userRegisteration from "@/components/UI/userRegistration.vue";
import createGroup from "@/components/UI/createGroup.vue";

export default {
    components: {
        userCard,
        userRegisteration,
        createGroup,
    },
    data() {
        return {
            isShowRegistrationForm: false,
            isShowGroupForm: false,
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
                    groups: [],
                },
                {
                    id: 2,
                    firstName: "Dhyey",
                    lastName: "Patel",
                    contactNumber: "9999999999",
                    state: "Gujrat",
                    city: "Ahmedabad",
                    friends: [],
                    groups: [],
                },
                {
                    id: 3,
                    firstName: "kaushal",
                    lastName: "Gandhi",
                    contactNumber: "9999999999",
                    state: "Gujrat",
                    city: "Ahmedabad",
                    friends: [],
                    groups: [],
                },
                {
                    id: 4,
                    firstName: "Jay",
                    lastName: "Thakkar",
                    contactNumber: "9999999999",
                    state: "Gujrat",
                    city: "Ahmedabad",
                    friends: [],
                    groups: [],
                },
                {
                    id: 5,
                    firstName: "ravi",
                    lastName: "rathod",
                    contactNumber: "9999999999",
                    state: "Gujrat",
                    city: "Ahmedabad",
                    friends: [],
                    groups: [],
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
            JSON.parse(localStorage.getItem("user_at"))?.id || null;
        this.loggedInUserData = this.userData.find(
            (user) => user.id === this.loggedInUserId
        );
    },
    methods: {
        addFriend(userID) {
            if (this.loggedInUserId) {
                const findUser = this.userData.find(
                    (user) => user.id === userID
                );
                console.log(findUser);
                findUser.friends.push(this.loggedInUserId);
                this.loggedInUserData.friends.push(userID);

                localStorage.setItem("userData", JSON.stringify(this.userData));
            } else {
                this.$router.push("/login");
            }
        },
        registerUser() {
            this.isShowRegistrationForm = true;
        },
        addUser(userObject) {
            this.userData.push(userObject);
            localStorage.setItem("userData", JSON.stringify(this.userData));
            this.isShowRegistrationForm = false;
        },
        closeForm() {
            this.isShowRegistrationForm = false;
        },
        onCreateGroup() {
            this.isShowGroupForm = true;
        },
        createGroup(groupName, groupUsers) {
            const groupData =
                JSON.parse(localStorage.getItem("groupData")) ?? [];

            const groupID = new Date().getTime();

            groupData.push({
                groupID,
                groupName,
                groupUsers,
            });
            groupUsers.forEach((groupUser) => {
                this.userData.forEach((user) => {
                    if (groupUser === user.id) {
                        user.groups.push(groupID);
                    }
                });
            });

            localStorage.setItem("groupData", JSON.stringify(groupData));
            localStorage.setItem("userData", JSON.stringify(this.userData));
            this.closeCreateGroup();
        },

        closeCreateGroup() {
            this.isShowGroupForm = false;
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
.form-container {
    position: fixed;
    z-index: 2;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: rgba(2, 2, 2, 0.562);
}
.form-container > div {
    position: relative;
    top: 25%;
    left: 35%;
    background-color: white;
}
.registrationForm-enter-active,
.createGroupForm-enter-active {
    transition: 0.3px ease-in;
    animation: popUp 0.8s;
}
.registrationForm-leave-active,
.createGroupForm-leave-active {
    transition: 0.3px ease-in;
    animation: popOut 0.8s;
}

@keyframes popUp {
    0% {
        scale: 0.7;
        opacity: 0;
    }
    50% {
        scale: 1.2;
        opacity: 1;
    }
    100% {
        scale: 1;
    }
}
@keyframes popOut {
    0% {
        scale: 1;
    }
    50% {
        scale: 1.2;
        opacity: 1;
    }
    100% {
        scale: 0.7;
        opacity: 0;
    }
}
</style>
