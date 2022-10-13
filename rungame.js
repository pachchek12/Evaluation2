let RandomDice, current_score, activePlayer, totalscore1, totalscore2;

init();

document.querySelector(".newgame").addEventListener('click', init);

// initial function to put all to zero or New game button
function init() {

  document.getElementById('score-1').textContent = '0';
  document.getElementById('score-2').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('current-2').textContent = '0';
  // Reseting Player Names
  document.getElementById("name-1").textContent = "Player 1";
  document.getElementById("name-2").textContent = "Player 2";

  // Hiding the dice for new game
  document.querySelector('.dice').style.display = 'none';

  //Change the text as New game 

  document.querySelector(".restart").textContent = "NEW GAME";

  current_score = 0;
  activePlayer = 1;
  totalscore1 = 0;
  totalscore2 = 0;

  }

// ROLL DICE
document.querySelector(".roll-dice").addEventListener("click", function() {

  // Random dice number
  var RandomDice = Math.floor(Math.random() * 6) + 1;

  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice' + RandomDice + '.png'; 

  if (RandomDice > 1) {
  current_score += RandomDice;
  document.getElementById("current-" + activePlayer).textContent = current_score;
  }
  else {
    changePlayer();
  }

});


function changePlayer() {
  current_score = 0;
  // switch to next player
  activePlayer === 1 ? (activePlayer = 2) : (activePlayer = 1);
  document.getElementById("current-" + activePlayer).textContent = current_score;
  
}


// HOLD button
document.querySelector(".btn-hold").addEventListener("click", function() {
  
    if (activePlayer == 1) {
      totalscore1 += current_score;
      document.getElementById("score-1").textContent = totalscore1;
      current_score = 0;
      document.getElementById("current-1").textContent = current_score;
      changePlayer();   
    }
    else{
      totalscore2 += current_score;
      document.getElementById("score-2").textContent = totalscore2;
      current_score = 0;
      document.getElementById("current-2").textContent = current_score;
      changePlayer();   
    }
  
  if (totalscore1 >= 100) {
    document.querySelector("#name-1").textContent = "Winner!";
    // message "start new game "
    document.querySelector(".restart").textContent = "Click to Restart the Game";

  }
  else if(totalscore2 >= 100) {
    document.querySelector("#name-2").textContent = "Winner!";
    // message "start new game "

    document.querySelector(".restart").textContent = "Click to Restart the Game";
  }

});

