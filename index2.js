

let game = (function() {
      
      let tamanho = document.querySelectorAll('td')
      const table = document.querySelector('table')  
      const play = document.querySelector('#play')
      const main = document.querySelector('main')
      let playerOne = document.querySelector('#player1')
      let playerTwo = document.querySelector('#player2')
      let h2 = document.querySelector('.player1')
      let second = document.querySelector('.player2')
      let h4 = document.createElement('h4')
      const h1 = document.querySelector('h1')
     
      h2.classList.add('a')
      second.classList.add('b')

      play.addEventListener('click', start)
    

    function start(e){
    
      if(playerOne.value === '' || playerTwo.value === ''){
      
        e.preventDefault()
        h1.appendChild(h4)
        h4.classList.add('warning')
   
        h4.innerText = 'Preencha os valores'
        setTimeout(() => {
          h1.appendChild(h4)
          h4.classList.remove('warning')
          h4.innerText = ''
          
        }, 2000)
        
      } else {
      main.classList.add('hide')
      table.classList.remove('hide') 
        
      }
      
    }
 
   function player(name, symbol){
    let player = Object.create({});
    
    player.name = name
    player.symbol = symbol
    
   
    
    return player
    
   }

   
   let clicks = 0
   let user1 = 0
   let user2 = 0
   function clickEvent(){
  
     
    tamanho.forEach((item) => item.addEventListener('click', e => {
      
      let player1 = player(playerOne.value, 'X')
      let player2 = player(playerTwo.value, 'O')
      h2.innerText = `${player1.name} ${result}`
      second.innerText = `${player2.name} ${result2}`
      console.log(player1.name)
    
      if(user1 === user2 && item.innerText === ''){
        
      
       item.textContent = player1.symbol 
        user1++     
        clicks++
        item.classList.add('des')
       console.log(clicks)
      } else if (user1 > user2 && item.innerText === ''){
         
        item.innerText = player2.symbol
        user2++  
        clicks++
        item.classList.add('des')
        console.log(clicks)    
      }

  
       jogar(player1.name, player2.name, clicks)
       
       
    }))
   
  }
  clickEvent()
  let result = 0
  let result2 = 0
    function jogar(player1, player2){
    
  
      let msg
      
      
      //************************* LINHAS ********************************************************/
      if(tamanho[0].textContent === 'X' && tamanho[1].textContent === 'X' && tamanho[2].textContent === 'X'){
        msg = `${player1} ganhou!`
        h3.style.color = 'Red'
        cria(msg)    
      } else {

      }

      if(tamanho[3].textContent === 'X' && tamanho[4].textContent === 'X' && tamanho[5].textContent === 'X'){
        msg = `${player1} ganhou!`
        cria(msg) 
      }
     
      if(tamanho[6].textContent === 'X' && tamanho[7].textContent === 'X' && tamanho[8].textContent === 'X'){
        msg = `${player1} ganhou!`
        cria(msg) 
      }

      //********************* COLUNAS *********************/ 
      if(tamanho[0].textContent === 'X' && tamanho[3].textContent === 'X' && tamanho[6].textContent === 'X'){
        msg = `${player1} ganhou!`
        cria(msg)    
      }

      if(tamanho[1].textContent === 'X' && tamanho[4].textContent === 'X' && tamanho[7].textContent === 'X'){
        msg = `${player1} ganhou!`
        cria(msg)    
      }

      if(tamanho[2].textContent === 'X' && tamanho[5].textContent === 'X' && tamanho[8].textContent === 'X'){
        msg = `${player1} ganhou!`
        cria(msg)    
      }

      //***************************DIAGONAL **************************** */
      
     

      if(tamanho[2].textContent === 'X' && tamanho[4].textContent === 'X' && tamanho[6].textContent === 'X' ){
        msg = `${player1} ganhou!`
        cria(msg)    
      }

      if(tamanho[0].textContent === 'X' && tamanho[4].textContent === 'X' && tamanho[8].textContent === 'X' ){
        msg = `${player1} ganhou!`
        cria(msg)    
      }
    
        //************************* LINHAS ********************************************************/
        if(tamanho[0].textContent === 'O' && tamanho[1].textContent === 'O' && tamanho[2].textContent === 'O'){
          msg = `${player2} ganhou!`
          cria(msg)    
        } 
  
        
  
        if(tamanho[3].textContent === 'O' && tamanho[4].textContent === 'O' && tamanho[5].textContent === 'O'){
          msg = `${player2} ganhou!`
          cria(msg) 
        }
       
        if(tamanho[6].textContent === 'O' && tamanho[7].textContent === 'O' && tamanho[8].textContent === 'O'){
          msg = `${player2} ganhou!`
          cria(msg) 
        }
  
        //********************* COLUNAS *********************/ 
        if(tamanho[0].textContent === 'O' && tamanho[3].textContent === 'O' && tamanho[6].textContent === 'O'){
          msg = `${player2} ganhou!`
          cria(msg)    
        }
  
        if(tamanho[1].textContent === 'O' && tamanho[4].textContent === 'O' && tamanho[7].textContent === 'O'){
          msg = `${player2} ganhou!`
          cria(msg)    
        }
  
        if(tamanho[2].textContent === 'O' && tamanho[5].textContent === 'O' && tamanho[8].textContent === 'O'){
          msg = `${player2} ganhou!`
          cria(msg)    
        }
  
        //***************************DIAGONAL **************************** */
        
        if(tamanho[0].textContent === 'O' && tamanho[4].textContent === 'O' && tamanho[8].textContent === 'O'){
          msg = `${player2} ganhou!`
          cria(msg)    
        }

        if(tamanho[2].textContent === 'X' && tamanho[4].textContent === 'X' && tamanho[6].textContent === 'X' ){
          msg = `${player1} ganhou!`
          cria(msg)    
        }
  
        if(tamanho[2].textContent === 'O' && tamanho[4].textContent === 'O' && tamanho[6].textContent === 'O' ){
          msg = `${player2} ganhou!`
          cria(msg)    
        }  

        if(msg !== `${player2} ganhou!` &&   msg !== `${player1} ganhou!` && clicks === 9){
          msg = `EMPATE`
        
          cria(msg) 
        }

        if(msg === `${player1} ganhou!`){
          let up = result + 1
          h3.style.color = 'rgb(223, 121, 121)'
          result++
          h2.innerText = `${up}`
        }else if(msg === `${player2} ganhou!`){
          let up2 = result2 + 1
          h3.style.color = 'rgb(105, 202, 105)'
          result2++
          second.innerText = `${up2}`
        } else {
          h3.style.color = 'black'
        }

       
        
    }
    let h3 = document.querySelector('h3')
      
    const div = document.querySelector('#hid')
    div.appendChild(h3)
    const btn = document.querySelector('.playAgain')

     
  
      function cria(msg){     
        
        table.classList.add('hide')
        div.classList.remove('hide')
        div.classList.add('show')      
        h3.innerText = msg
        
       
        reinicio()
     
       
      } 

      
    
      function reinicio(){
       
        
       tamanho.forEach((item) => {
        item.innerText = ''
        item.classList.remove('des')
       })
       h3.appendChild(btn)
          btn.addEventListener('click', e => { 
            
            user1 = 0
            user2 = 0
            clicks = 0
            table.classList.remove('hide')
            div.classList.add('hide')
            div.classList.remove('show')
            start()
           
          })
       
      }
  
   const init = () => jogar()
     
    return {
      init: init,
    
    }
})()


game.init()

