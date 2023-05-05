<template>
    <!-- <CustomPopUp /> -->
    <div class="dashboard-wrapper">
        <div class="dashboard-header">
            <h1>Dashboard</h1>
            <div class="dashboard-search-container">
                <input
                    type="text"
                    ref="searched-value"
                    placeholder="Search Something...."
                />
                <button class="search-btn">Find</button>
            </div>
        </div>

        <div class="dashboard-user-list">
            <div
                class="user-data-container"
                v-for="user in userData"
                :key="user.id"
            >
                <div class="user-detail">{{ user.name }}</div>
                <div>
                    <button @click="editUser(user.id)" class="edit-btn">
                        Edit
                    </button>
                    <button @click="deleteUser(user.id)" class="delete-btn">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>

    <AddUser @addUser="addUser" />
</template>

<script>
import AddUser from "./AddUser.vue";

export default {
    components: {
        AddUser,
    },
    data() {
        return {
            userData: [],
        };
    },
    created() {
        this.userData = JSON.parse(localStorage.getItem("userData")) ?? [];
    },
    methods: {
        addUser(userObject) {
            const dataObject = {
                id: userObject.id,
                name: userObject.enteredName,
                surname: userObject.enteredSurname,
                age: userObject.enteredAge,
                dob: userObject.enteredDob,
                gender: userObject.enteredGender,
            };
            console.log(this.userData, dataObject);

            this.userData.push(dataObject);
            localStorage.setItem("userData", JSON.stringify(this.userData));
        },
        editUser(userId) {
            // console.log(userId);
            const userIndex = this.userData.findIndex(
                (user) => user.id === userId
            );
            // console.log(userIndex);
            // this.userData[userIndex].name = "sasaa";
            console.log(this.userData[userIndex].name);
        },
        deleteUser(userId) {
            const userIndex = this.userData.findIndex(
                (user) => user.id === userId
            );
            this.userData.splice(userIndex, 1);
            localStorage.setItem("userData", JSON.stringify(this.userData));
        },
    },
};
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}
.dashboard-wrapper {
    margin-top: 2rem;
    max-width: 800px;
    margin-inline: auto;
    box-shadow: 0px 0px 5px rgb(168, 168, 168);
    /* padding: 1rem; */
    border-radius: 8px;
}

.user-data-container {
    display: flex;
    justify-content: space-between;
}

.dashboard-header {
    background: linear-gradient(to right, #2ebdff, #076aff);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 1rem;
}

.dashboard-header > h1 {
    margin: 0;
    color: white;
}

.dashboard-search-container {
    padding: 0px 1rem 1rem 1rem;
    display: flex;
    justify-content: center;
}

.dashboard-search-container > input {
    border: none;
    border-radius: 5px;
    padding: 0.4rem;
    box-shadow: 0px 0px 1px rgb(160, 160, 160);
    outline: none;
}

.dashboard-search-container > input::placeholder {
    opacity: 0.7;
}

.search-btn,
.edit-btn,
.delete-btn {
    margin-left: 0.5rem;
    border: none;
    background-color: white;
    padding: 0.4rem 1rem;
    border-radius: 5px;
    border: 1px solid white;
}

.search-btn:active,
.edit-btn:active,
.delete-btn:active {
    border: 1px solid rgb(122, 122, 122);
}

.dashboard-user-list {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 1rem;
}

.user-data-container {
    border-radius: 5px;
    background-color: rgb(230, 230, 230);
    padding: 0.5rem;
}

.user-detail {
    display: flex;
    align-items: center;
}
</style>

``` 5-05-2022 Technology : Vue Js learning :- Learning Resource app in vue
js(3h) task:- user registration (4h) ```
