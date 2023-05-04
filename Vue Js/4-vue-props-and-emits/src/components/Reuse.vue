<template>
    <h2>Reusable component users name= {{user.name}}</h2>
    <h2>Reusable component users email = {{user.email}}</h2>
    <!-- <br /> -->

</template>

<script>
    export default{
        name: "reuse",
        props:{
            user: Object
        },
}

</script>