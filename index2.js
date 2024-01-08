let tabuleiro = []


let game = (function() {
  
      let tamanho = document.querySelectorAll('td')
      const table = document.querySelector('table')  
      const play = document.querySelector('#play')
      const main = document.querySelector('main')
      let playerOne = document.querySelector('#player1')
      let playerTwo = document.querySelector('#player2')
      let h2 = document.querySelector('.player1')
      let second = document.querySelector('.player2')
      table.appendChild(h2)
      table.appendChild(second)
      h2.classList.add('a')
      second.classList.add('b')
      play.addEventListener('click', e => {
        if(playerOne.value === '' || playerTwo.value === ''){
          console.log('aadasd')
        } else {
        main.classList.add('hide')
        table.classList.remove('hide')
     
        }
       
      })
      

    console.log(tamanho)
   function player(name, symbol){
    let player = Object.create({});
    
    player.name = name
    player.symbol = symbol
   
    
    return player
    
   }

  


   
    
   

  
   
      
   let user1 = 0
   let user2 = 0
   function clickEvent(){
 

    tamanho.forEach((item) => item.addEventListener('click', e => {
   
      let player1 = player(playerOne.value, 'X')
      let player2 = player(playerTwo.value, 'O')
      h2.innerText = player1.name
      second.innerText = player2.name
      console.log(player1.name)
      if(user1 === user2 && item.innerText === ''){
       item.textContent = player1.symbol
      
        user1++
        console.log(user1)
      } else if (user1 > user2 && item.innerText === ''){
        item.innerText = player2.symbol
        user2++
      }
      
      console.log('o valor dele é ' + tamanho[0].value)
       jogar(player1.name, player2.name)
          
    }))

  }
  clickEvent()
    function jogar(player1, player2){
      
  
      let msg
    
      //****** LINHAS */
      if(tamanho[0].textContent === 'X' && tamanho[1].textContent === 'X' && tamanho[2].textContent === 'X'){
        msg = `${player1} ganhou!`
        cria(msg)    
      }

      if(tamanho[3].textContent === 'X' && tamanho[4].textContent === 'X' && tamanho[5].textContent === 'X'){
        msg = `${player1} ganhou!`
        cria(msg) 
      }
     
      if(tamanho[6].textContent === 'X' && tamanho[7].textContent === 'X' && tamanho[8].textContent === 'X'){
        msg = `${player1} ganhou!`
        cria(msg) 
      }
      
     }
  
      function cria(msg){
      
        let h3 = document.querySelector('h3')
        const div = document.querySelector('#hid')
        div.appendChild(h3)
        table.classList.add('hide')
        div.classList.remove('hide')
        div.classList.add('show')
        return h3.innerText = msg
      } 
    
  
     
    return {
      jogar : jogar
    }
})()


game.jogar()
