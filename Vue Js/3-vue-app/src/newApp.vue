<template> 
    <userComp 
        v-for="user in users" 
        :key=user.id 
        :id= user.id
        :user-name= user.name 
        :user-age=user.age 
        :is-user-verified=user.isVerified 
        @change-status = changeStatus
        @delete-user = deleteUser
    />

</template>


<script>
    import userComp from './components/userComp.vue'

export default ({
    components:{
        userComp
    },
   data(){
    return{
        users:[
            {
                id:1,
                name: 'sagar',
                age: 21,
                isVerified: true
            },
            {
                id:2,
                name: 'rajesh',
                age: 22,
                isVerified: false
            },
            {
                id:3,
                name: 'abc',
                age: 77,
                isVerified: false
            },

        ]
    }
   },
   methods:{
    changeStatus(userId){
        const user = this.users.find((user) => user.id === userId);
        user.isVerified = !user.isVerified
    },
    deleteUser(userId){
        this.users = this.users.filter((user) => user.id !== userId);
    }
   }
})
</script>

// provide and inject is used to export and import the data from onw file to another file
// provide:{
    // topics:{

    // }
// }

// use it as method to get changes
// provide(){
    return{
        topic:this.topic
    }
}

// we can inject this data only it is provided in the higher component or parent component

// inject: ['topic']