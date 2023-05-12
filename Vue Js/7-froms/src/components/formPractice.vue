<template>
    <div class="form-wrapper">
        <form @submit.prevent="submmitDetails">
            <div class="form-container">
                <div class="form-elements">
                    <label class="form-label" for="user-name">Name </label>
                    <input
                        class="form-input"
                        type="text"
                        id="user-name"
                        v-model="basicDetails.name"
                        @blur="validateBasicDetailName"
                    />
                    <p v-if="validityCheck.name === 'inValid'">
                        Name Is required
                    </p>
                </div>

                <div class="form-elements">
                    <label class="form-label" for="user-surname">
                        Surname
                    </label>
                    <input
                        class="form-input"
                        type="text"
                        id="user-surname"
                        v-model="basicDetails.surname"
                        @blur="validateBasicDetailSurname"
                    />
                </div>

                <div class="form-elements">
                    <label class="form-label" for="user-age"> age </label>
                    <input
                        class="form-input"
                        type="number"
                        id="user-age"
                        v-model="basicDetails.age"
                        @blur="validateBasicDetailAge"
                    />
                </div>

                <div class="form-elements">
                    <label class="form-label" for="user-dob">
                        Date of Birth
                    </label>
                    <input
                        class="form-input"
                        type="date"
                        id="user-dob"
                        v-model="basicDetails.dob"
                        @blur="validateBasicDetailDob"
                    />
                </div>

                <div class="form-elements flex-col gender-container">
                    <label class="form-label" for="user-gender"> Gender </label>
                    <div class="flex flex-row">
                        <div>
                            <input
                                type="radio"
                                id="gender-male"
                                value="male"
                                name="user-gender"
                                v-model="basicDetails.gender"
                                @blur="validateBasicDetailGender"
                            />
                            <label class="form-label" for="gender-male">
                                Male
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="gender-female"
                                value="female"
                                name="user-gender"
                                v-model="basicDetails.gender"
                                @blur="validateBasicDetailGender"
                            />
                            <label class="form-label" for="gender-female">
                                Female
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="gender-other"
                                value="other"
                                name="user-gender"
                                v-model="basicDetails.gender"
                                @blur="validateBasicDetailGender"
                            />
                            <label class="form-label" for="gender-other">
                                Other
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-elements">
                    <button>Submit</button>
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
            basicDetails: {
                name: null,
                surname: null,
                age: null,
                dob: null,
                gender: null,
            },
            validityCheck: {
                name: null,
                surname: null,
                age: null,
                dob: null,
                gender: null,
            },
        };
    },
    methods: {
        submmitDetails() {
            console.log(this.basicDetails);
            this.basicDetails = this.initialPhase;
        },
        validateBasicDetailName() {
            if (this.basicDetails.name) {
                this.validityCheck.name = "valid";
            } else {
                this.validityCheck.name = "inValid";
            }
        },
        validateBasicDetailSurname() {
            if (this.basicDetails.surname) {
                this.validityCheck.surname = "valid";
            } else {
                this.validityCheck.surname = "inValid";
            }
        },
        validateBasicDetailAge() {
            if (this.basicDetails.age) {
                this.validityCheck.age = "valid";
            } else {
                this.validityCheck.age = "inValid";
            }
        },
        validateBasicDetailDob() {
            if (this.basicDetails.dob) {
                this.validityCheck.dob = "valid";
            } else {
                this.validityCheck.dob = "inValid";
            }
        },
        validateBasicDetailGender() {
            if (this.basicDetails.gender) {
                this.validityCheck.gender = "valid";
            } else {
                this.validityCheck.gender = "inValid";
            }
        },
    },
};
</script>

<style scoped>
.form-wrapper {
    border: 1px solid black;
    width: 400px;
    display: flex;
    justify-content: center;
    padding: 1rem;
}
.form-elements {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    width: 210px;
    row-gap: 4px;
}
.form-input {
    width: 200px;
}
.flex {
    display: flex;
}
.flex-row {
    flex-direction: row;
}
.flex-col {
    flex-direction: column;
}
.gender-container {
    column-gap: 1rem;
}
p {
    color: red;
}
</style>
