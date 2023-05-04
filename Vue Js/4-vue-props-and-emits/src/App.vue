<script>
import Basic from './components/basic.vue';
import Hello from './components/Hello.vue';
import checkBox from './components/checkBox.vue';
import childComponent from './components/childComponent.vue';
import reuse from './components/Reuse.vue';

  export default{
    components:{
      Hello,
      childComponent,
      reuse
      
    },
    // data(){
    //   return{ 
    //     user:  {name: "Sagar", email: "Test@e.com"}
    //   }
    // }
    data(){
        return{
            users:[
                // {name:  "Sagar",email: "sagar.com"},
                // {name:  "S!",email: "!.com"},
                // {name:  "S?",email: "?.com"},
            ]
        }
    },
    methods: {
      getData(id){
        console.log("Called", id)
        return {
          name1: "hellllllo"
        }
      }
    }
  }

</script>

<template>
  <header>
    <!-- <Basic /> -->
    <!-- <Hello /> -->
    <!-- <checkBox /> -->
    <!-- <childComponent name= "Sagar" :user="user" :getData="getData"/> -->
    <reuse v-for="user in users" :user="user"/>

  </header>

</template>
