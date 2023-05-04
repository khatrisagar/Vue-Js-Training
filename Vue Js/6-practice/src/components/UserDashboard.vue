<template>
   <h1>Helllo</h1>

    <div 
    v-for="user in users" 
    :key="user.id"
    @add-user = addUser
    >
        <p>{{user.name}}</p>
        <p>{{user.age}}</p>
        <p>{{user.state}}</p>

    </div>
    
</template>


<script>

export default ({
    data(){
        return{
            users:[
            ]
        }
    },
    methods:{
        addUser(userName, userAge, userState){
            console.log('aaa')
            this.users.push({
                id: new Date().toISOString(),
                name: userName,
                age: userAge,
                state: userState
            })
        }
    }

})
</script>

