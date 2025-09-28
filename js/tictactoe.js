//Declaring & Initializing Variables
var turn = 1;
var spaceText = "";
var gameOver = false;

resetGame();
// Reset all of the text boxes, reinitialize variables, and hide/show appropriate labels
function resetGame() {
  turn = 1;
  spaceText = "";
  gameOver = false;
  document.getElementById("aSpace").value = "";
  document.getElementById("bSpace").value = "";
  document.getElementById("cSpace").value = "";
  document.getElementById("dSpace").value = "";
  document.getElementById("eSpace").value = "";
  document.getElementById("fSpace").value = "";
  document.getElementById("gSpace").value = "";
  document.getElementById("hSpace").value = "";
  document.getElementById("iSpace").value = "";
  turn = 1;
  document.getElementById("player").value = "Player-X";
  document.getElementById("winner").value = "";

}
function press(n) {
  var idSpace = n + "Space";
  if (!gameOver) {
    document.getElementById("soundClick").play();
    spaceText = document.getElementById(idSpace).value;

    if (spaceText == "" && turn == 1) {
      document.getElementById(idSpace).value= "X";
      document.getElementById("player").value = "Player-O";
      turn = 2;    
    } else if (spaceText == "" && turn == 2) {
      document.getElementById(idSpace).value = "O";
      document.getElementById("player").value = "Player-X";
      turn = 1;
    } else {
      document.getElementById(idSpace).value = spaceText;
    }

    checkWin();
  }
}

function checkWin() {
  var a = document.getElementById("aSpace").value;
  var b = document.getElementById("bSpace").value;
  var c = document.getElementById("cSpace").value;
  var d = document.getElementById("dSpace").value;
  var e = document.getElementById("eSpace").value;
  var f = document.getElementById("fSpace").value;
  var g = document.getElementById("gSpace").value;
  var h = document.getElementById("hSpace").value;
  var i = document.getElementById("iSpace").value;

  // 2️⃣
  //The first IF and ELSE IF statements check horizontal rows for a win
  if((a=="X" && b=="X" && c=="X") || (d=="X" && e=="X" && f=="X") || (g=="X" && h=="X" && i=="X")) {
    xWins();
  } else if ((a=="O" && b=="O" && c=="O") || (d=="O" && e=="O" && f=="O") || (g=="O" && h=="O" && i=="O")){
    oWins();
    
  // 3️⃣
  //The next two ELSE IFs check vertical columns for a win   
  } else if ((a=="X" && d=="X" && g=="X") || (b=="X" && e=="X" && h=="X") || (c=="X" && f=="X" && i=="X")) {
    xWins();
  } else if((a=="O" && d=="O" && g=="O") || (b=="O" && e=="O" && h=="O") || (c=="O" && f=="O" && i=="O")) {
    oWins();
    
  // 4️⃣
  //The next two ELSE IFs check diagonals for a win  
  } else if ((a=="X" && e=="X" && i=="X") || (c=="X" && e=="X" && g=="X")) {
    xWins();
  } else if ((a=="O" && e=="O" && i=="O") || (c=="O" && e=="O" && g=="O")) {
    oWins();

  // 5️⃣    
  //The last ELSE IF checks whether the board is full, and, if so, marks the game a draw
  } else if (a!="" && b!="" && c!="" && d!="" && e!="" && f!="" && g!="" && h!="" && i!="" ){
    document.getElementById("winner").value = "DRAW";
  }
}

function xWins(){
  document.getElementById("winner").value = "Winner is X";
  gameEnd();
}

// O Wins based on conditionals
function oWins(){
  document.getElementById("winner").value = "Winner is O";
  gameEnd();
}

function gameEnd() {
  gameOver = true;
  document.getElementById("player").value = "";
  document.getElementById("soundWin").play();
}

