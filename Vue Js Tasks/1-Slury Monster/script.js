const sluryMonster =  Vue.createApp({
    data(){
        return{
            healthData:{
                monsterHealth: 100,
                playerHealth: 100
            },
            turnFlag:"playerTurn",
            winner: null,
            powers:{
                specialPower: 0,
                healPower: 0
            },
            battleLogs: [],
            score:{
                monster: 0,
                player:0
            }
        }
    },
    methods:{
        playerAttack(){
            if(this.isAbletoAttack) return
            const attackValue=  Math.floor(Math.random()* 9)+1
            this.healthData.monsterHealth -= attackValue
            this.powers.specialPower++;
            this.powers.healPower++;
            this.turnFlag = "monsterTurn"
            this.battleLogs.push({log:`You Attacked on monster with ${attackValue} damage`, logColor:"green"})
            
            this.monsterAttack()
        },

        playerSpecialAttack(){
            if(this.isSpecialPower) return
            const attackValue =  Math.floor(Math.random()* 24)+1
            this.healthData.monsterHealth -= attackValue
            this.turnFlag = "monsterTurn"
            this.powers.specialPower = 0
            this.battleLogs.push({log:` You Attacked on monster with ${attackValue} damage`,logColor: "blue"})
        
            this.monsterAttack()
        },

        playerHeal(){
            if(this.isHealPower) return
            const healValue =  Math.floor(Math.random()* 14)+1
            this.healthData.playerHealth += healValue
            this.turnFlag = "monsterTurn"
            this.powers.healPower = 0
            this.battleLogs.push({log:`${healValue} Health Restored`, logColor:"yellow"})
        
            this.monsterAttack()
        },

        playerSurrender(){
            if(this.isAbletoSurrender) return
            this.winner = "monster"
        },
        monsterAttack(){
            setTimeout(()=>{
                if(!this.winner && this.turnFlag == "monsterTurn"){
                    const attackValue = Math.floor(Math.random()* 14)+1
                    this.healthData.playerHealth -= attackValue
                    this.turnFlag = "playerTurn"
                    this.battleLogs.push({log:`Monster attack on you with ${attackValue} damage`, logColor: "red"})
                }
            },2000)
        },
        getScore(){
          const savedScoreData = JSON.parse(sessionStorage.getItem("scoreData"))

          if(savedScoreData){
              this.score.monster = savedScoreData.monster  
              this.score.player = savedScoreData.player  
          }
        },
        setScore(){
            sessionStorage.setItem('scoreData', JSON.stringify(this.score))
        },
        resetState(){
                this.healthData.monsterHealth =100
                this.healthData.playerHealth =100
                this.turnFlag = "playerTurn"
                this.winner = null,
                this.battleLogs.splice(0,this.battleLogs.length)
                this.powers.specialPower = 0
        }
    },
    computed:{
        isAbletoAttack(){
            return this.turnFlag === "monsterTurn"
        },
        isSpecialPower(){
           return this.powers.specialPower <7  || this.turnFlag === "monsterTurn"
        },
        isHealPower(){
            return this.healthData.playerHealth >= 30 || this.powers.healPower <2 || this.turnFlag === "monsterTurn"
        },
        isAbletoSurrender(){
            return this.healthData.monsterHealth >= 100 || this.turnFlag ===  "monsterTurn"
        },
        monsterHealthBar(){
            return {healthWidth: this.healthData.monsterHealth+'%', backgroundColor: this.healthData.monsterHealth < 30 ? 'red': 'green'}
        },
        playerHealthBar(){
            return {healthWidth: this.healthData.playerHealth+'%', backgroundColor: this.healthData.playerHealth < 30 ? 'red': 'green'}
        },
        checkWinner(){
            if(this.healthData.monsterHealth <=0){
                this.winner = "player"
                this.score.player++;
                this.setScore()
                alert("You Win")
                this.resetState()
            }
            if(this.healthData.playerHealth <=0){
                this.winner = "monster"
                this.score.monster++;
                this.setScore()
                alert(`Oops Monster Kill you!!!`)
                this.resetState()
            }
        }
    },
})

sluryMonster.mount('#slury-monster')