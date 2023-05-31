<template>
    <form action="" @submit.prevent="onSubmit">
        <label for="">Name</label>
        <input type="text" v-model="name" @blur="v$.name.$touch" />
        <p v-for="error of v$.name.$errors" :key="error.$uid">
            {{ error.$message }}
        </p>
        <!-- <p v-if="v$.name.$error">THis is errp</p> -->
        <label for="">Contact</label>
        <input type="text" v-model="v$.contact.$model" />
        <p v-if="v$.contact.$error">THis is errp</p>
        <label for="">Email</label>
        <input type="text" v-model="email" />
        <p v-if="v$.email.$error">THis is errp</p>
        <label for="">Date</label>
        <input type="date" v-model="date" />
        <!-- <p v-if="v$.date.$error">{{ error.$message }}</p> -->
        <p v-for="error of v$.date.$errors" :key="error.$uid">
            {{ error.$message }}
        </p>
        {{ this.date }}
        <button>Submit</button>
    </form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, minValue, email } from "@vuelidate/validators";

export default {
    setup() {
        return { v$: useVuelidate() };
    },
    data() {
        return {
            name: null,
            requiredNameLength: 10,
            contact: null,
            email: null,
            date: null,
        };
    },
    validations() {
        return {
            name: {
                required,
                $lazy: true,
                minLength: minLength(this.requiredNameLength),
            },
            contact: { required },
            email: { required, email, $autoDirty: true },
            date: {
                required,
                $autoDirty: true,
                minValue: minValue(new Date().toISOString().slice(0, 10)),
            },
        };
    },
    methods: {
        async onSubmit() {
            // console.log("aaaa", this.v$.name);
            // this.v$.name.$dirty = true;
            // console.log(this.v$.name.$invalid);
            // this.v$.name.$touch();
            // this.v$.$touch();
            // console.log(this.v$.name.$model);
            // this.v$.$reset();
            console.log(await this.v$.$validate());
        },
    },
    // computed: {
    //     getNameLength() {
    //         return { minLength: minLength(this.name) };
    //     },
    // },
};
</script>
