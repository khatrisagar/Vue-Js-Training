<template>
    <form action="" @submit.prevent="">
        <label for="user-name">Username</label>
        <input type="text" id="user-name" ref="userName" />
        <br>
        <br>

        <label for="user-age">Age</label>
        <input type="text" id="user-age" ref="userAge" />
        <br>
        <br>

        <label for="user-state">State</label>
        <input type="text" id="user-state" ref="userState" />
        <br>
        <br>

        <button @click="addUser">Add User</button>
    </form>
    
</template>


<script>

export default ({
    data(){
        return{
            
        }
    },
    emits:['add-user'],
    methods:{
        addUser(){  
            const userName = this.$refs.userName.value
            const userAge = this.$refs.userAge.value
            const userState = this.$refs.userState.value
            this.$emit('add-user',userName, userAge, userState)
        }
    }
})
</script>




