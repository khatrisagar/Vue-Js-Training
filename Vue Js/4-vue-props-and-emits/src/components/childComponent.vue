<template>
<h2>Child Component name =  {{ user.name }} email = {{ user.email }}</h2>
<button @click="getData(0)">Get Data</button>


</template>

<script>
    export default{
        name: "ChildComponent",
        props:{
            name: String,
            user: Object,
            getData: Function
        },

    }

</script>