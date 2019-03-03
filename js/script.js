gameInit();

var  gamePlay, player, roundScore, totalScore, previousDice1, previousDice2, goal;

document.getElementById("newGame").addEventListener("click", gameInit);

function gameInit() {
 gamePlay = true;
 player = Math.floor(Math.random() * 2);
 roundScore = 0;
 totalScore = [0, 0];
 goal = 100;

 document.getElementById("dyce-1").textContent = "";
 document.getElementById("dyce-2").textContent = "";

 document.getElementById("current-score").textContent = roundScore;
 document.getElementById("current-score").textContent = roundScore;

 document.getElementById("Total-1").textContent = totalScore[0];
 document.getElementById("Total-2").textContent = totalScore[1];

 document.getElementById("dyce-1").textContent = "";
 document.getElementById("dyce-2").textContent = "";

 document.getElementById("player-label-01").textContent = "Player 01";
 document.getElementById("player-label-02")


 document.getElementById("Player-01")
 document.getElementById("Player-02")

 document.getElementById("Player-" + player)
}


document.getElementById("roll").addEventListener("click", function() {

if(gamePlay) {


 // 1. Roll the dice & record previously rolled number by a player
 var dice1 = Math.floor(Math.random() * 6) + 1;
 var dice2 = Math.floor(Math.random() * 6) + 1;

 // 2. Update respective roundScore
 roundScore += dice1 + dice2;
 document.getElementById("current-score-" + player).textContent = roundScore;

// 3. Display numbers on their respective dice
 document.getElementById("dyce-1").textContent = dice1;
 document.getElementById("dyce-2").textContent = dice2;

 // 4. Check whether either dice rolled a 1
 if (dice1 === 1 || dice2 === 1) {
 nextPlayer();
 }

 // 5. Check if previous roll for either dice was a 6 and compare whether current roll for either dice is a 6.
 if (previousDice1 === 6 && dice1 === 6 || previousDice2 === 6 && dice2 === 6) {
 (player === 0) ? totalScore[player] = 0 : totalScore[player] = 0;
 document.getElementById("Total-" + player).textContent = totalScore[player];
 nextPlayer();
 } else {
   previousDice1 = dice1;
   previousDice2 = dice2;
 }

}

});

document.getElementById("hold").addEventListener("click", function() {
if (gamePlay) {

 // 1. Round score gets added to totalScore and round score is cleared
 totalScore[player] += roundScore;

 // 2. Check if total score of a player is greater than the goal and update accordingly
 if (totalScore[player] >= goal) {
  document.getElementById("Total-" + player).textContent = totalScore[player];
  document.getElementById("player-label-" + player).textContent = "WINNER!";
  document.getElementById("player-label-" + player)
   gamePlay = false;
  } else {
    document.getElementById("total-" + player).textContent = totalScore[player];
    nextPlayer();
 }

  // 3. Clear Dice
  document.getElementById("dyce-1").textContent = "";
  document.getElementById("dyce-2").textContent = "";
}

});

function nextPlayer() {
 roundScore = 0;
 document.getElementById("current-score-" + player).textContent = roundScore;
 document.getElementById("player-" + player).classList.remove("active");
 (player === 0) ? player = 1 : player = 0;
 document.getElementById("Player-" + player).classList.add("active");
 document.getElementById("dyce-1").textContent = "";
 document.getElementById("dyce-2").textContent = "";
}
