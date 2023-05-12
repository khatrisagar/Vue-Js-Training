<template>
    <form action="" @submit.prevent="submitForm">
        <label for="text-box">Text Box</label>
        <input type="text" id="text-box" v-model="textBox" />
        <br />
        <br />
        <label for="number-box">Number Box</label>
        <input type="number" id="number-box" v-model="numberBox" />
        <br />
        <br />
        <label for="select-box">Selection Box</label>
        <select name="" id="select-box" v-model="selectBox">
            <option value="null" selected hidden disabled>Select</option>
            <option value="s1">s1</option>
            <option value="s2">s2</option>
            <option value="s3">s3</option>
        </select>

        <br />
        <br />

        <label for="">Radio Button </label>

        <input type="radio" name="rBtn" value="r1" v-model="radioButton" />
        <label for="">R1</label>
        <input type="radio" name="rBtn" value="r2" v-model="radioButton" />
        <label for="">R2</label>
        <input type="radio" name="rBtn" value="r3" v-model="radioButton" />
        <label for="">R3</label>
        <br />
        <br />

        <label for="">Check Box </label>

        <input type="checkbox" name="rBtn" value="c1" v-model="checkBox" />
        <label for=""> R1</label>
        <input type="checkbox" name="rBtn" value="c2" v-model="checkBox" />
        <label for="">R2</label>
        <input type="checkbox" name="rBtn" value="c3" v-model="checkBox" />
        <label for="">R3</label>

        <br />
        <br />

        <input
            type="checkbox"
            name="singlecheck"
            value="Trueee"
            v-model="confirm"
        />
        <label for="">Agree T&C ?</label>
        <br />
        <br />

        <ratingCom v-model="rating" />
        <br />
        <br />

        <button>Submit</button>
    </form>
</template>

<script>
import ratingCom from "./rating-com.vue";

export default {
    components: {
        ratingCom,
    },
    data() {
        return {
            textBox: null,
            numberBox: null,
            selectBox: null,
            checkBox: [],
            radioButton: null,
            confirm: false,
            rating: null,
        };
    },
    methods: {
        submitForm() {
            console.log(this.rating);
            this.rating = null;
        },
        active(option) {
            this.rating = option;
        },
    },
};
</script>
