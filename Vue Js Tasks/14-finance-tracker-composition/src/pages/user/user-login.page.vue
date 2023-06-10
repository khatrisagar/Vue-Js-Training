<template>
    <v-sheet width="300" class="mx-auto">
        <v-form @submit.prevent ref="form">
            <v-text-field
                v-model="userEmail"
                :rules="getUserLoginValidation.userEmailRules"
                label="Email"
            ></v-text-field>
            <v-text-field
                v-model="userPassword"
                :append-icon="
                    togglePasswordVisisble
                        ? 'fa-solid fa-eye'
                        : 'fa-solid fa-eye-slash'
                "
                :type="togglePasswordVisisble ? 'text' : 'password'"
                :rules="getUserLoginValidation.userPasswordRules"
                label="password"
                @click:append="togglePasswordVisisble = !togglePasswordVisisble"
            ></v-text-field>

            <p v-if="showLoginError" class="text-red">
                Invalid Email Or Password
            </p>
            <v-btn type="submit" @click="onFormSubmit" block class="mt-2"
                >Login User</v-btn
            >
        </v-form>
    </v-sheet>
</template>

<script>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import { setLoggedInUserToStore } from "@/utils";
import {
    getUsersFromLocalStorage,
    setLoggedInUserToLocalStorage,
} from "@/services";

import { userLoginValidation } from "@/validations";
export default {
    setup() {
        const router = useRouter();
        const form = ref(null);

        const togglePasswordVisisble = ref(false);

        const userEmail = ref(null);
        const userEmailRules = ref([
            (value) => {
                if (value) return true;

                return "Email Should Not be Empty.";
            },
        ]);
        const userPassword = ref(null);
        const userPasswordRules = ref([
            (value) => {
                if (value) return true;

                return "Pasword  Should Not be Empty.";
            },
        ]);
        const showLoginError = ref(false);

        const getUserLoginValidation = computed(() => {
            return userLoginValidation;
        });

        const onFormSubmit = async () => {
            const { valid } = await form.value.validate();
            if (valid) {
                const users = getUsersFromLocalStorage();
                if (users.length) {
                    for (let user of users) {
                        if (
                            user.email === userEmail.value &&
                            user.password === userPassword.value
                        ) {
                            setLoggedInUserToLocalStorage({ id: user.id });

                            setLoggedInUserToStore();
                            router.push({ name: "transactions" });
                        } else {
                            showLoginError.value = true;
                        }
                    }
                } else {
                    showLoginError.value = true;
                }
            }
        };

        return {
            togglePasswordVisisble,
            form,
            userEmail,
            userEmailRules,
            userPassword,
            userPasswordRules,
            showLoginError,
            onFormSubmit,

            getUserLoginValidation,
        };
    },
};
</script>
