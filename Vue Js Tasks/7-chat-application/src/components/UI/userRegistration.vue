<template>
    <div class="registration-form-wrapper">
        <div class="form-element">
            <label class="form-label" for="first-name">First Name</label>
            <input
                type="text"
                id="first-name"
                class="form-input"
                v-model="userObject.firstName"
            />
        </div>
        <div class="form-element">
            <label class="form-label" for="last-name">Last Name</label>
            <input
                type="text"
                id="last-name"
                class="form-input"
                v-model="userObject.lastName"
            />
        </div>
        <div class="form-element">
            <label class="form-label" for="contact-number"
                >Contact Number</label
            >
            <input
                type="text"
                id="contact-number"
                class="form-input"
                v-model="userObject.contactNumber"
            />
        </div>
        <div class="form-element">
            <label class="form-label" for="state">State</label>
            <input
                type="text"
                id="state"
                class="form-input"
                v-model="userObject.state"
            />
        </div>
        <div class="form-element">
            <label class="form-label" for="city">City</label>
            <input
                type="text"
                id="city"
                class="form-input"
                v-model="userObject.city"
            />
        </div>
        <div class="form-element">
            <button @click="addUser">ADD USER</button>
            <button @click="closeForm">Cancel</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userObject: {
                firstName: null,
                lastName: null,
                contactNumber: null,
                state: null,
                city: null,
            },
        };
    },
    methods: {
        addUser() {
            this.$emit("addUser", {
                id: new Date().getTime(),
                friends: [],
                ...this.userObject,
            });
        },
        closeForm() {
            this.$emit("closeForm");
        },
    },
};
</script>

<style scoped>
.registration-form-wrapper {
    box-shadow: 0px 0px 3px 0.5px black;
    width: 400px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    border-radius: 4px;
}
.form-element {
    display: flex;
    flex-direction: column;
}
</style>
