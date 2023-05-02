const sluryMonster =  Vue.createApp({
    data(){
        return{
            healthData:{
                monsterHealth: 100,
                playerHealth: 100
            },
            turnFlag:0,
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
            const attackValue=  Math.floor(Math.random()* 9)+1
            this.healthData.monsterHealth -= attackValue
            this.powers.specialPower++;
            this.powers.healPower++;
            this.turnFlag = 1
            this.battleLogs.push(`<p class="green">You Attacked on monster with ${attackValue} damage</p>`)
        },

        playerSpecialAttack(){
            const attackValue =  Math.floor(Math.random()* 24)+1
            this.healthData.monsterHealth -= attackValue
            this.turnFlag = 1
            this.powers.specialPower = 0
            this.battleLogs.push(`<p class="blue">You Attacked on monster with ${attackValue} damage</p>`)
        },

        playerHeal(){
            const healValue =  Math.floor(Math.random()* 14)+1
            this.healthData.playerHealth += healValue
            this.turnFlag = 1
            this.powers.healPower = 0
            this.battleLogs.push(`<p class="yellow"> ${healValue} Health Restored</p>`)
        },

        playerSurrender(){
            this.winner = "monster"
        },
        monsterAttack(){
            const attackValue = Math.floor(Math.random()* 14)+1
            this.healthData.playerHealth -= attackValue
            this.turnFlag = 0
            this.battleLogs.push(`<p class="red">Monster attack on you with ${attackValue} damage</p>`)
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
                this.turnFlag = 0
                this.winner = null,
                this.battleLogs.splice(0,this.battleLogs.length)
        }
    },
    computed:{
        isAbletoAttack(){
            if(this.turnFlag === 1){
                return true
            }
            else{
                return false
            }
        },
        isSpecialPower(){
           if(this.powers.specialPower >= 7 && this.turnFlag === 0){
                return false
            }
            else{
                return true
            }
        },
        isHealPower(){
            if(this.healthData.playerHealth<=30 && this.powers.healPower >=2 && this.turnFlag === 0){
                return false
            }
            else{
                return true
            }
        },
        isAbletoSurrender(){
            if(this.healthData.monsterHealth < 100 && this.turnFlag === 0){
                return false
            }
            else{
                return true
            }
        }
    },
    watch:{
         turnFlag(){
            if(this.turnFlag==1 && this.winner == null){
                setTimeout(()=>{
                        this.monsterAttack()
                },2000)
            }
        },
        'healthData.monsterHealth'(){
            if(this.healthData.monsterHealth <=0){
                this.winner = "player"
            }
        },
        'healthData.playerHealth'(){
            if(this.healthData.playerHealth <=0){
                this.winner = "monster"
            }
        },

        winner(value){
            if(this.winner != null){
                if(this.winner == "monster"){
                    this.score.monster++;
                    this.setScore()
                    alert(`Oops Monster Kill you!!!`)
                    this.resetState()
                }
                if(this.winner == "player"){
                    this.score.player++;
                    this.setScore()
                    alert("You Win")
                    this.resetState()
                }
            }
        }
    }
})

sluryMonster.mount('#slury-monster')