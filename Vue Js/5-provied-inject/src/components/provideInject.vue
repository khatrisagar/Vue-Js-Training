<template>
    <h1 @click='onclick(users[0].id)'>{{users[0].name}}</h1>
    <h1>{{users[0].age}}</h1>
</template>


<script>
export default ({
    data(){
        return{
            
        }
    },
    inject:['users', 'onclick']
})
</script>
