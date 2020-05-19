console.log('연결 확인')
new Vue({
el: '#app',
data: {
      myChoice: null,
      comChoice: null,
      count: 3
      lifeOfMe: 3,
      lifeOfCom: 3,
      isSelectable: true
      logs:[]
},
watch: {
      count: function (newVal) {
            if(newVal === 0){
                  let number = Math.random()
                  if(number < 0.33){
                        this.comChoice = 'scissor'
                  } else if(number < 0.66){
                        this.comChoice = 'rock'
                  } else {
                        this.comChoice = 'paper'
                  }
                //Math.random() 0.33, 0.66, 그 외 나머지
                //가위바위보 승패 결정
                if(this.myChoice === this.comChoice) this.winner = 'no one'
                else if(this.myChoice === 'rock' && this.comChoice === 'scissor') this.winner = 'me'
                else if(this.myChoice === 'scissor' && this.comChoice === 'paper') this.winner = 'me'
                else if(this.myChoice === 'paper' && this.comChoice === 'rock') this.winner = 'me'
                else if(this.myChoice === 'scissor' && this.comChoice === 'rock') this.winner = 'com'
                else if(this.myChoice === 'paper' && this.comChoice === 'scissor') this.winner = 'com'
                else if(this.myChoice === 'rock' && this.comChoice === 'paper') this.winner = 'com'
                else this.winner = 'error'


                //몫 차감
                if(this,winner === 'me') {
                      this.lifeOfCom --
                }
                else if(this.winner === 'com'){
                      this.lifeOfMe --
                }
                this.count = 3  
                this.isSelectable = true   

                let log = {
                      messege: 'You: ${this.myChoice}, Computer: ${this.comChoice}',
                      winner: this.winner
                }
                this.logs.unshift(log)
            }
      }
      lifeOfMe: function(newVal){
            if(newVal === 0){
             setTimeout(() => {
                  confirm('안타깝네요. 당신이 패배하였습니다.')
                  this.lifeOfMe = 3
                  this.lifeOfCom = 3
                  this.myChoice = null
                  this.comChoice = null
                  this.winner = null
                  this.logs = []
             }, 500)
            }
      }
      lifeOfCom: function(newVal){
            if(newVal === 0){
                  setTimeout(() => {
                  confirm('축하드립니다. 당신이 승리하였습니다.')
                  this.lifeOfMe = 3
                  this.lifeOfCom = 3
                  this.myChoice = null
                  this.comChoice = null
                  this.winner = null
                  this.logs = []
            }, 500)
      }
}
mehoods: {
      startGame: function () {
            this.isSelectable = false 
            if(this.myChoice === null){
                  alert('가위 바위보 중 하나를 선택해주세요.')
            } else { 
                  let countdown= setInterval(()=> {
                        this.count --
                        if(this.count === 0){
                              clearInterval(countdown)
                        }
                  }, 1000)
            }
            
      }
}
    
    
})