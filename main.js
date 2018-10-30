document.addEventListener('DOMContentLoaded', function(){


  var playerplaying = 'player1'
  var divs = document.querySelectorAll('div')
  var winnerCombination = [
    [divs[0], divs[1], divs[2]],
    [divs[3], divs[4], divs[5]],
    [divs[6], divs[7], divs[8]],
    [divs[0], divs[3], divs[6]],
    [divs[1], divs[4], divs[7]],
    [divs[2], divs[5], divs[8]],
    [divs[0], divs[4], divs[8]],
    [divs[2], divs[4], divs[6]]
  ]

  for (i = 0; i < divs.length; i++){
      divs[i].addEventListener('click', insertPlay)
  }

  alert(`${playerplaying} turn !`)

//play
  function insertPlay(ev){
    if (playerplaying === 'player1'){
      ev.target.innerText = "X";
      playerplaying = 'player 2'
      window.alert(`${playerplaying} turn !`)
    }else{
      ev.target.innerText = "O"
      playerplaying = 'player 1'
      window.alert(`${playerplaying} turn !`)
    }
    checkWinner(winnerCombination)
  }


// stop when winner
function checkWinner(winnerCombination){
  for (var i = 0; i < winnerCombination.length; i++) {
      if (winnerCombination[i][0].innerText != "" &&
      winnerCombination[i][0].innerText === winnerCombination[i][1].innerText &&
      winnerCombination[i][0].innerText === winnerCombination[i][2].innerText) {
        window.alert(`${playerplaying} is the Winner !`)
      }
    }
}


})
