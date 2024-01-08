let tabuleiro = []


let game = (function() {
      let rows = 3
      let colunas = 3
      let tamanho = document.querySelectorAll('td')
      const play = document.querySelector('#play')
    
    play.addEventListener('click', e => {
      play.classList.remove('hide')
    })
      for (let i = 0; i < rows; i++){
        tamanho[i] = []
        for (let j = 0; j < colunas; j++){
          tamanho[i][j] = ''
        }
      }

    console.log(tamanho)
   function player(name, symbol){
    let player = Object.create({});
    
    player.name = name
    player.symbol = symbol
    
     player.move = function(mat, vet, cond){
      if(cond){
        console.log('É a vez de' + ' ' + player.name)
      } else {
        console.log(player.name + ' ' + 'você não pode jogar')
        return
      }

    
        mat
        vet 
        if(mat >= tamanho.length || vet >= tamanho.length){
          console.log('Não existe')
        } else if (tamanho[mat][vet] !== ''){
          console.log('Já está preenchido')
          return
        }
        else {
          tamanho[mat][vet] = player.symbol
          console.log(tamanho)
        }
        
     } 

   
    Object.freeze(player.symbol)
 
    return player
   }
      
   function jogar(){
   
   
    clickEvent()
   }

   function clickEvent(){
   
 
    
   }
  
    return {
      jogar : jogar
    }
})()


game.jogar()







