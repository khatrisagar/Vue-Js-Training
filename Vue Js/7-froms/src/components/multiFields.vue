<template>
    <form action="" @submit.prevent="submitForm">
        {{ dataObject.fieldOne }}
        {{ dataObject.fieldTwo }}
        {{ dataObject.fieldThree }}
        {{ dataObject.fieldFour }}
        <div v-for="(data, index) in dataObject.fieldOne" :key="index">
            <br />
            <br />
            <label for="fieldOne">Field One</label>
            <input
                type="text"
                name="fieldOne"
                v-model="dataObject.fieldOne[index]"
            />
            <br />
            <br />
            <label for="fieldTwo">Field Two</label>
            <input
                type="text"
                name="fieldTwo"
                v-model="dataObject.fieldTwo[index]"
            />
            <br />
            <br />
            <label for="fieldThree">Field Three</label>
            <input
                type="text"
                name="fieldThree"
                v-model="dataObject.fieldThree[index]"
            />
            <br />
            <br />
            <label for="fieldFour">Field Four</label>
            <input
                type="text"
                name="fieldFour"
                v-model="dataObject.fieldFour[index]"
            />
            <button type="button" @click="removeFields(index)">Remove</button>
        </div>
        <button type="button" @click="addFields">Add</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            dataObject: {
                fieldOne: [""],
                fieldTwo: [""],
                fieldThree: [""],
                fieldFour: [""],
            },
        };
    },
    methods: {
        addFields() {
            this.dataObject.fieldOne.push("");
            this.dataObject.fieldTwo.push("");
            this.dataObject.fieldThree.push("");
            this.dataObject.fieldFour.push("");
        },
        removeFields(index) {
            this.dataObject.fieldTwo.splice(index, 1);
            this.dataObject.fieldOne.splice(index, 1);
            this.dataObject.fieldThree.splice(index, 1);
            this.dataObject.fieldFour.splice(index, 1);
        },
    },
};
</script>
