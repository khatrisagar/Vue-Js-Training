<template>
    <!-- <CustomPopUp /> -->
    <div class="dashboard-wrapper">
        <div class="dashboard-header">
            <h1>Dashboard</h1>
            <div class="dashboard-search-container">
                <input
                    type="text"
                    ref="searchedValue"
                    placeholder="Search Something...."
                />
                <button class="search-btn" @click="searchUser">Find</button>
            </div>
        </div>

        <div class="dashboard-user-list">
            <div class="user-data-container user-data-container-heading">
                <div class="user-detail">Name</div>
                <div class="user-detail">Surname</div>
                <div class="user-detail">Age</div>
                <div class="user-detail">DOB</div>
                <div class="user-detail">Gender</div>
                <div class="user-detail"></div>
                <div class="user-detail"></div>
            </div>
            <div v-for="(user, index) in userData" :key="user.id">
                <div class="user-data-container" v-if="index !== editIndex">
                    <div class="user-detail">{{ user.name }}</div>
                    <div class="user-detail">{{ user.surname }}</div>
                    <div class="user-detail">{{ user.age }}</div>
                    <div class="user-detail">{{ user.dob }}</div>
                    <div class="user-detail">{{ user.gender }}</div>

                    <div>
                        <button @click="editUser(user.id)" class="edit-btn">
                            Edit
                        </button>
                        <button @click="deleteUser(user.id)" class="delete-btn">
                            Delete
                        </button>
                    </div>
                </div>

                <div class="user-data-container" v-if="index === editIndex">
                    <input
                        class="user-detail user-detail-input"
                        ref="inputName"
                        :value="user.name"
                    />
                    <input
                        class="user-detail user-detail-input"
                        ref="inputSurname"
                        :value="user.surname"
                    />
                    <input
                        class="user-detail user-detail-input"
                        ref="inputAge"
                        :value="user.age"
                    />
                    <input
                        class="user-detail user-detail-input"
                        ref="inputDob"
                        :value="user.dob"
                    />
                    <input
                        class="user-detail user-detail-input"
                        ref="inputGender"
                        :value="user.gender"
                    />

                    <div>
                        <button @click="saveChanges(user.id)" class="edit-btn">
                            Save
                        </button>
                        <button @click="cancelChanges()" class="edit-btn">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            userData: [],
            editIndex: null,
        };
    },
    created() {
        this.userData = JSON.parse(localStorage.getItem("userData")) ?? [];
    },
    methods: {
        editUser(userId) {
            this.editIndex = this.userData.findIndex(
                (user) => user.id === userId
            );
        },

        saveChanges() {
            this.userData[this.editIndex].name = this.$refs.inputName[0].value;
            this.userData[this.editIndex].surname =
                this.$refs.inputSurname[0].value;
            this.userData[this.editIndex].age = this.$refs.inputAge[0].value;
            this.userData[this.editIndex].dob = this.$refs.inputDob[0].value;
            this.userData[this.editIndex].gender =
                this.$refs.inputGender[0].value;

            localStorage.setItem("userData", JSON.stringify(this.userData));
            this.editIndex = null;
        },

        cancelChanges() {
            this.editIndex = null;
        },

        deleteUser(userId) {
            const userIndex = this.userData.findIndex(
                (user) => user.id === userId
            );
            if (confirm(`Are you sure you want to delete`) === true) {
                this.userData.splice(userIndex, 1);
                localStorage.setItem("userData", JSON.stringify(this.userData));
            } else {
                return;
            }
        },

        searchUser() {
            const searchValue = this.$refs.searchedValue.value;
            if (searchValue) {
                this.userData = JSON.parse(
                    localStorage.getItem("userData")
                ).filter(
                    (user) =>
                        user.name === searchValue ||
                        user.surname === searchValue ||
                        user.age === searchValue ||
                        user.dob === searchValue ||
                        user.gender === searchValue
                );
            } else {
                this.userData =
                    JSON.parse(localStorage.getItem("userData")) ?? [];
            }
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
.user-data-container-heading {
    background-color: rgb(5, 5, 4) !important;
    color: white;
}

.user-detail {
    display: flex;
    align-items: center;
}
.user-detail-input {
    width: 100px;
    height: 30px;
    outline: none;
    border: 1px solid rgb(187, 187, 187);
    border-radius: 4px;
    text-align: center;
}
</style>
