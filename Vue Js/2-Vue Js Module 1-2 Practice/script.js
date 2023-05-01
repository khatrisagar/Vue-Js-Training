const app = Vue.createApp({
    data(){
        return{
            inputText: ['edit me'],
            showInput: [false]
        }
    },
    methods:{
        editText(index){
            console.log("clicked")
            this.showInput[index] = !this.showInput[index]
        },
        addText(){
            this.inputText.push('edit me')
            this.showInput.push(false)
        },
        deleteText(index){
            this.inputText.splice(index,1)
            this.showInput.splice(index,1)
        }
    },
    computed:{

    },
    watch:{
        showInput(){
            if(this.showInput){
                // fetch(update)
            }
        }
    }
    
})

app.mount('#app')

const form = Vue.createApp({
    data(){
        return{
            textbox1: [''],
            textbox2: [''],
            textbox3: [''],
            textbox4: ['']
        }
    },
    methods:{
        addMore(){
           this.textbox1.push('') 
           this.textbox2.push('') 
           this.textbox3.push('') 
           this.textbox4.push('') 
        },
        saveData(){
            localStorage.setItem("formdata",JSON.stringify({
                textbox1:this.textbox1,
                textbox2:this.textbox2,
                textbox3:this.textbox3,
                textbox4:this.textbox4
            }))
            // console.log({
            //     textbox1:this.textbox1,
            //     textbox2:this.textbox2,
            //     textbox3:this.textbox3,
            //     textbox4:this.textbox4
            // })
        },
        deleteData(index){
            this.textbox1.splice(index,1)
            this.textbox2.splice(index,1)
            this.textbox3.splice(index,1)
            this.textbox4.splice(index,1)
        },
        getData(){
            const formdata = JSON.parse(localStorage.getItem("formdata"))
            this.textbox1 = formdata.textbox1 
            this.textbox2 = formdata.textbox2
            this.textbox3 = formdata.textbox3
            this.textbox4 = formdata.textbox4
        }
    }
})

form.mount('#form')