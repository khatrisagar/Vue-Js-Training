<template>
    <AddUser @add-user = addUser />
     <div 
        v-for="user in users" 
        :key="user.id"
       
        >
            <p>{{user.name}}</p>
            <p>{{user.age}}</p>
            <p>{{user.state}}</p>

        </div>
   <h1>Helllo</h1>

    
    
</template>


<script>
import AddUser from './AddUser.vue'

export default ({
    components:{
        AddUser
    },
    data(){
        return{
            users:[]
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

