<template>
    <!-- <h1 v-if="show">THis is the message from hello vue</h1>
    <h2 v-else>Else condition vue</h2> -->

    <h1>{{ show ? "Hello from If" : "Hello from else " }}</h1>


    <button @click="show= !show">{{show ? "Show" : "Hide"}}</button>

        <ul>
            <li v-for="item in tech" :key="item">{{item}}</li>
        </ul>

        <ul>
            <li v-for="item in user" :key="item.name">{{ item }}</li>
        </ul>

</template>

<script>

export default{
    data(){
        return{
            show: true,
            tech: ["1", "2", "3", "4", "5","6"],
            user: {
                name: "Sagar",
                lName: "Khatri" 
            }
        }
    }
}

</script>