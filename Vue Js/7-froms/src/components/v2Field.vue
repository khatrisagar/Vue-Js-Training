<template>
    <form action="" @submit.prevent="submitForm">
        {{ dataObject }}
        <div v-for="(data, index) in dataObject" :key="index">
            <br />
            <br />
            <label for="fieldOne">Field One</label>
            <input type="text" name="fieldOne" v-model="data.fieldOne" />
            <br />
            <br />
            <label for="fieldTwo">Field Two</label>
            <input type="text" name="fieldTwo" v-model="data.fieldTwo" />
            <br />
            <br />
            <label for="fieldThree">Field Three</label>
            <input type="text" name="fieldThree" v-model="data.fieldThree" />
            <br />
            <br />
            <label for="fieldFour">Field Four</label>
            <input type="text" name="fieldFour" v-model="data.fieldFour" />
            <button type="button" @click="removeFields(index)">Remove</button>
        </div>
        <button type="button" @click="addFields">Add</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            dataObject: [
                {
                    fieldOne: null,
                    fieldTwo: null,
                    fieldThree: null,
                    fieldFour: null,
                },
            ],
        };
    },
    methods: {
        addFields() {
            const obj = {
                fieldOne: null,
                fieldTwo: null,
                fieldThree: null,
                fieldFour: null,
            };

            this.dataObject.push(obj);
        },
        removeFields(index) {
            this.dataObject.splice(index, 1);
        },
    },
};
</script>
