const app = Vue.createApp({
    data(){
        return{
            firstObj: {fName:"Test", lName: "test2"},
            testLink: 'https://google.com',
            counter: 0,
            name:'',
        }
    },
    methods:{
        getName(event){
            // this.name = event.target.value
            // console.log(event.data)
        },
        randomNumber(){
            return Math.random() * 1000
        },
        updateCounter(i){
            console.log()
            this.counter+=i
        },
        formSubmit(event){
            event.preventDefault()
            alert("hello")
        }
    },
    computed:{
        computedFunction(){
           return "SSS"
        }
    }

})
app.mount('#app')


const app2 = Vue.createApp({
    data(){
        return{
            number: 0,
        }
    },
    methods:{
        randomNumber(){
            console.log("called")
            this.number = Math.random() * 1000
        }
    }
})

app2.mount('#app2')