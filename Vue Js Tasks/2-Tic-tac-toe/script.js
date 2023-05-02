const ticTacToe =  Vue.createApp({
    data(){
        return{
            playerValues: ['','','','','','','','',''],
            endFlag:0,
            turnFlag: 0,
            winMessage: ''
        }
    },
    methods:{
        playerMoves(index){
            if(this.playerValues[index] === '' && this.endFlag=== 0){
                if(this.turnFlag){
                    this.playerValues[index] = 'O'
                    this.turnFlag = 0
                }
                else{
                    this.playerValues[index] = 'X'
                    this.turnFlag = 1
                }
            }
        },
        resetGame(){
            this.playerValues = ['','','','','','','','','']
            this.turnFlag =  0,
            this.winMessage =  ''
            this.endFlag=0
        },
        checWin(){
            const winSituations =  [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ]
            winSituations.map((win)=>{
                console.log(this.playerValues[win[0]])
                if(this.playerValues[win[0]] == 'X' && this.playerValues[win[1]] == 'X' && this.playerValues[win[2]] == 'X'){
                    this.winMessage = "X win"
                    this.endFlag=1
                }
                if(this.playerValues[win[0]] == 'O' && this.playerValues[win[1]] == 'O' && this.playerValues[win[2]] == 'O'){
                    this.winMessage = "O win"
                    this.endFlag=1
                }
            })
        }
    },
    watch:{
        turnFlag(){
            console.log(this.playerValues)
            if(this.playerValues.includes('')){
                this.checWin()
            
            }else{
                this.winMessage = "Draw"
                this.checWin()
            }
        }
    }
})


ticTacToe.mount('#tic-tac-toe')