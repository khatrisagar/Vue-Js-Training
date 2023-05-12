<template>
    <form action="" @submit.prevent="submitForm">
        {{ inputOne }}
        <div v-for="(box, index) in inputOne" :key="index">
            <input type="text" v-model="inputOne[index]" />
            <br />
            <br />
            <button type="button" @click="removeElement(index)">Remove</button>
        </div>

        <button>Submit</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            inputOne: ["", "", "", ""],
            check: [],
            // boxes: [{}, {}],
        };
    },
    methods: {
        submitForm() {
            console.log(this.inputOne);
        },
        removeElement(index) {
            this.inputOne.splice(index, 1);
        },
    },
};
</script>
