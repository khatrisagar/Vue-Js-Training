<template>
    <div class="add-user-wrapper">
        <form @submit.prevent="addUser">
            <div class="form-container">
                <div class="form-header">
                    <h2>User Registration</h2>
                </div>
                <div class="input-container">
                    <div>
                        <label for="user-name">Name</label>
                        <input
                            type="text"
                            id="user-name"
                            v-model="userInputData.name"
                        />
                    </div>
                    <div>
                        <label for="user-surname">Suname</label>
                        <input
                            type="text"
                            id="user-surname"
                            v-model="userInputData.surname"
                        />
                    </div>
                    <div>
                        <label for="user-age">Age</label>
                        <input
                            type="text"
                            id="user-age"
                            v-model="userInputData.age"
                        />
                    </div>
                    <div>
                        <label for="user-dob">Date of Birth</label>
                        <input
                            type="text"
                            id="user-dob"
                            v-model="userInputData.dob"
                        />
                    </div>
                    <div>
                        <label for="user-gender">Gender</label>
                        <input
                            type="text"
                            id="user-gender"
                            v-model="userInputData.gender"
                        />
                    </div>

                    <div>
                        <input type="submit" id="submit-btn" value="Add User" />
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            initialPhase: {
                name: null,
                surname: null,
                age: null,
                dob: null,
                gender: null,
            },
            userInputData: {
                name: null,
                surname: null,
                age: null,
                dob: null,
                gender: null,
            },
            userData: [],
        };
    },
    created() {
        this.userData = JSON.parse(localStorage.getItem("userData")) ?? [];
    },
    methods: {
        addUser() {
            this.userData.push({
                id: new Date().toISOString(),
                ...this.userInputData,
            });

            this.userInputData = this.initialPhase;
            localStorage.setItem("userData", JSON.stringify(this.userData));
        },
    },
};
</script>

<style scoped>
.add-user-wrapper {
    display: flex;
    min-height: 90vh;
    overflow-y: hidden;
    justify-content: center;
    align-items: center;
}

.form-container {
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgb(73, 73, 73);
}

.input-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 300px;
}

.form-header {
    background-color: #048eff;
    display: flex;
    justify-content: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 0.3rem;
}

.form-header > h2 {
    margin: 0 !important;
    display: inline;
    color: white;
}

.input-container > div {
    display: flex;
    justify-content: space-between;
}

.input-container > div > input {
    border-radius: 4px;
    padding: 0.2rem;
    border: 1px solid rgb(46, 46, 46);
}

#submit-btn {
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.4rem;
    width: 100%;
    font-size: 1.2rem;
    color: white;
    background-color: #048eff;
}
</style>
