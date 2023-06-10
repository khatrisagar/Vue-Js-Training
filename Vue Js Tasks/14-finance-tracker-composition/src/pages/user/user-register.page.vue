<template>
    <v-sheet width="300" class="mx-auto">
        <v-form @submit.prevent ref="form">
            <v-text-field
                v-model="userName"
                :rules="getUserRegisterValidation.userNameRules"
                label="Name"
            ></v-text-field>
            <v-text-field
                v-model="userEmail"
                :rules="getUserRegisterValidation.userEmailRules"
                label="Email"
            ></v-text-field>
            <v-text-field
                v-model="userPassword"
                label="password"
                :append-icon="
                    togglePasswordVisisble
                        ? 'fa-solid fa-eye'
                        : 'fa-solid fa-eye-slash'
                "
                :type="togglePasswordVisisble ? 'text' : 'password'"
                :rules="getUserRegisterValidation.userPasswordRules"
                @click:append="togglePasswordVisisble = !togglePasswordVisisble"
            ></v-text-field>
            <v-btn type="submit" @click="onFormSubmit" block class="mt-2"
                >Register User</v-btn
            >
        </v-form>
        <v-container v-if="warning"
            ><p class="text-red">{{ warning }}</p></v-container
        >
    </v-sheet>
</template>
<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import { getUsersFromLocalStorage, setUsersToLocalStorage } from "@/services";

import { userRegisterValidation } from "@/validations";
export default {
    setup() {
        const router = useRouter();

        const togglePasswordVisisble = ref(false);
        const userName = ref(null);
        const warning = ref(null);
        const userNameRules = ref([
            (value) => {
                if (value) return true;

                return "User Name Should Not be Empty.";
            },
        ]);
        const userEmail = ref(null);
        const userEmailRules = ref([
            (value) => {
                if (value) return true;

                return "Email Should Not be Empty.";
            },
            (value) => {
                if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

                return "Must be a valid e-mail.";
            },
        ]);
        const userPassword = ref(null);
        const userPasswordRules = ref([
            (value) => {
                if (value) return true;

                return "Password Should Not be Empty.";
            },
            (value) => {
                if (value?.length > 8) return true;

                return "Password Should be greater than 8 Digits";
            },
        ]);
        const form = ref(null);

        const getUserRegisterValidation = computed(() => {
            return userRegisterValidation;
        });

        const onFormSubmit = async () => {
            const { valid } = await form.value.validate();
            if (valid) {
                let users = getUsersFromLocalStorage();
                const usersEmail = users.map((user) => user.email);
                if (!usersEmail.includes(userEmail.value)) {
                    users.push({
                        id: new Date().getTime(),
                        name: userName.value,
                        email: userEmail.value,
                        password: userPassword.value,
                        transactions: [],
                    });
                    setUsersToLocalStorage(users);

                    router.push({ name: "userLogin" });
                } else {
                    warning.value = "User Already Exists";
                }
            }
        };
        return {
            togglePasswordVisisble,
            userName,
            userNameRules,
            userEmail,
            userEmailRules,
            userPassword,
            userPasswordRules,
            form,
            onFormSubmit,
            warning,
            getUserRegisterValidation,
        };
    },
};
</script>
