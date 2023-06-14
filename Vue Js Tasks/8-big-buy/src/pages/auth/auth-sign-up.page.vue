<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent ref="form">
      <v-text-field
        v-model="userName"
        :rules="getUserRegisterValidation.userNameRules"
        label="Name"
      ></v-text-field>
      <v-text-field
        v-model="userSurname"
        :rules="getUserRegisterValidation.userSurnameRules"
        label="Surname"
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
          togglePasswordVisisble ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'
        "
        :type="togglePasswordVisisble ? 'text' : 'password'"
        :rules="getUserRegisterValidation.userPasswordRules"
        @click:append="togglePasswordVisisble = !togglePasswordVisisble"
      ></v-text-field>
      <v-btn type="submit" @click="onUserSignUp" block class="mt-2"
        >Register User</v-btn
      >
    </v-form>
    <v-container v-if="isWarning">
      <v-snackbar v-model="isWarning">
        {{ onRegisterWarning }}

        <template v-slot:actions>
          <v-btn color="blue" variant="text" @click="isWarning = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </v-sheet>
</template>
<script>
//
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

// services
import { signUpService } from "@/services";
// validation
import { userRegisterValidation } from "@/validations";

export default {
  setup() {
    const router = useRouter();

    // form
    const form = ref(null);
    const togglePasswordVisisble = ref(false);

    // warning
    const onRegisterWarning = ref(null);
    const isWarning = ref(false);

    // user
    const userName = ref(null);
    const userSurname = ref(null);
    const userEmail = ref(null);
    const userPassword = ref(null);

    // computed
    const getUserRegisterValidation = computed(() => {
      return userRegisterValidation;
    });

    // methods
    const onUserSignUp = async () => {
      const { valid } = await form.value.validate();
      if (valid) {
        try {
          const userRegisterPayload = {
            name: userName.value,
            surname: userSurname.value,
            email: userEmail.value,
            password: userPassword.value,
          };
          const onRegisterResponse = await signUpService(userRegisterPayload);

          if (onRegisterResponse.status == 201) {
            router.push({ name: "authLogin" });
          }
        } catch (error) {
          isWarning.value = true;
          onRegisterWarning.value = error.response.data.error.message;
        }
      }
    };

    return {
      togglePasswordVisisble,
      userName,
      userSurname,
      userEmail,
      userPassword,
      form,
      onUserSignUp,

      isWarning,
      onRegisterWarning,

      getUserRegisterValidation,
    };
  },
};
</script>
