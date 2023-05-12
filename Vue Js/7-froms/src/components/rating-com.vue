<template>
    <button
        :class="{ active: activeOption === '1' }"
        type="button"
        @click="active('1')"
    >
        1
    </button>
    <button
        :class="{ active: activeOption === '2' }"
        type="button"
        @click="active('2')"
    >
        2
    </button>
    <button
        :class="{ active: activeOption === '3' }"
        type="button"
        @click="active('3')"
    >
        3
    </button>
    <button
        :class="{ active: activeOption === '4' }"
        type="button"
        @click="active('4')"
    >
        4
    </button>
</template>

<script>
export default {
    data() {
        return {
            activeOption: null,
        };
    },
    props: ["modelValue"],

    methods: {
        active(option) {
            this.activeOption = option;
            this.$emit("update:modelValue", option);
        },
    },
};
</script>

<style scoped>
.active {
    border: 2px solid greenyellow;
}
</style>
