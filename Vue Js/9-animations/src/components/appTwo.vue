<template>
    <div>
        <h1>Template Two</h1>
        <router-link to="/route-one">one</router-link>
        {{ name }}
    </div>
</template>

<script>
export default {
    props: {
        name: String,
    },
};
</script>
