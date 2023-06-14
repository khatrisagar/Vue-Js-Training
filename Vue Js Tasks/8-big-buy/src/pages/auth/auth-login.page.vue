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
          togglePasswordVisisble ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'
        "
        :type="togglePasswordVisisble ? 'text' : 'password'"
        :rules="getUserLoginValidation.userPasswordRules"
        label="password"
        @click:append="togglePasswordVisisble = !togglePasswordVisisble"
      ></v-text-field>

      <p v-if="showLoginError" class="text-red">Invalid Email Or Password</p>
      <v-btn type="submit" @click="onUserLogin" block class="mt-2"
        >Login User</v-btn
      >
    </v-form>
  </v-sheet>
</template>

<script>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import { loginService } from "@/services";
import { userLoginValidation } from "@/validations";

// helper
import { setLoggedInUserToState } from "@/utils/";
export default {
  setup() {
    const router = useRouter();

    const form = ref(null);
    const togglePasswordVisisble = ref(false);

    const showLoginError = ref(false);

    const userEmail = ref(null);
    const userPassword = ref(null);

    // computed
    const getUserLoginValidation = computed(() => {
      return userLoginValidation;
    });

    // methods
    const onUserLogin = async () => {
      const { valid } = await form.value.validate();
      if (valid) {
        const onLoginResponse = await loginService({
          email: userEmail.value,
          password: userPassword.value,
        });

        localStorage.setItem("big_buy_at", onLoginResponse.data.data.token);
        localStorage.setItem(
          "user",
          JSON.stringify(onLoginResponse.data.data.user)
        );

        setLoggedInUserToState(); // helper

        router.push({ name: "home" });
      }
    };

    return {
      togglePasswordVisisble,
      form,
      userEmail,
      userPassword,
      showLoginError,
      onUserLogin,

      // computed
      getUserLoginValidation,
    };
  },
};
</script>
