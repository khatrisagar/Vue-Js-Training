<template>
    <v-toolbar color="primary" app>
        <v-toolbar-items class="hidden-xs-only">
            <router-link
                class="text-decoration-none d-flex align-items-center"
                :to="{ name: 'transactions' }"
            >
                <V-Btn class="font-weight-bold"> Transactions </V-Btn>
            </router-link>
            <router-link
                class="text-decoration-none d-flex align-items-center"
                :to="{ name: 'createTransaction' }"
            >
                <V-Btn class="font-weight-bold"> Add Transaction </V-Btn>
            </router-link>
        </v-toolbar-items>

        <v-spacer></v-spacer>
        <v-toolbar-items v-if="!getLoggedInUserState.isUserLoggedIn">
            <router-link
                class="text-decoration-none d-flex align-items-center"
                :to="{ name: 'userLogin' }"
            >
                <V-Btn class="font-weight-bold">Login</V-Btn>
            </router-link>
            <router-link
                class="text-decoration-none d-flex align-items-center"
                :to="{ name: 'userRegister' }"
            >
                <V-Btn class="font-weight-bold"> SignUp </V-Btn>
            </router-link>
        </v-toolbar-items>
        <v-chip label v-if="getLoggedInUserState.isUserLoggedIn">{{
            getLoggedInUserState.userName
        }}</v-chip>
        <v-toolbar-items v-if="getLoggedInUserState.isUserLoggedIn">
            <V-btn @click="logoutUser">Logout</V-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-switch v-model="currentTheme" @change="toggleTheme"></v-switch>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import { getThemefromLocalStorage, setThemeToLocalStorage } from "@/services";

import { ref, computed } from "vue";
import { useTheme } from "vuetify";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const theme = useTheme();

        const currentTheme = ref(null);

        const getLoggedInUserState = computed(() => {
            return store.getters["user/getLoggedInUserState"];
        });

        const logoutUser = () => {
            localStorage.removeItem("user_at");
            store.dispatch("user/setLogoutUserState");
            router.push({ name: "userLogin" });
        };

        const toggleTheme = () => {
            const currentTheme = getThemefromLocalStorage();
            if (currentTheme === "dark") {
                setThemeToLocalStorage("light");
                theme.global.name.value = "light";
            } else if (currentTheme === "light") {
                setThemeToLocalStorage("dark");
                theme.global.name.value = "dark";
            }
        };

        return { currentTheme, getLoggedInUserState, logoutUser, toggleTheme };
    },
};
</script>
