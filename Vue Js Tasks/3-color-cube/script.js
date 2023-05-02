const colorCube = Vue.createApp({
    data(){
        return{
            rowNumber: 2,
            columnNumber: 2,
            randomX: 0,
            randomY: 0,
            randomColor: '#1266f3',
            timer: 30,
            gameCondition: false,
            score: 0
        }
    },
    methods:{
        genrateRandomColor(){
            this.randomColor = '#' + Math.floor((Math.random()* 888888)+111111)
        },
        generateRandomNumber(){
            this.randomX = Math.floor(Math.random() * this.rowNumber)
            this.randomY = Math.floor(Math.random() * this.columnNumber)
        },
        clickColor(x,y){
            if(x == this.randomX && y == this.randomY){
                this.gameCondition = true
                this.rowNumber++;
                this.columnNumber++;
                this.score++;
                this.genrateRandomColor()
                this.generateRandomNumber()
           }
        },
        updateTimer(){
            const intervalId = setInterval(()=>{
               if(this.timer > 0){
                this.timer= this.timer-1;
               }
               else{
                this.stopGame()
                clearInterval(intervalId)
               }
            },1000)
        },
        stopGame(){
            alert(`You Score = ${this.score}`)
            this.score = 0;
            this.rowNumber= 2
            this.columnNumber= 2
            this.randomX= 0
            this.randomY= 0
            this.timer= 30
            this.gameCondition= false
        }
    },
    watch:{
        gameCondition(){
            if(this.gameCondition === true){
                this.updateTimer() 
            }
        }
    }
    
})

colorCube.mount('#colorCube')