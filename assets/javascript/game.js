// the counters for wins, losses and turns
var winCount = 0;
var lossCount = 0;
var turnCount = 10;

// Value vars
var winCountText = document.getElementById("win-display");
var lossCountText = document.getElementById("loss-display");
var turnCountText = document.getElementById("remaining-guesses-display");
var computerLetterText = document.getElementById("computer-letter");
var userGuessDisplayText = document.getElementById("user-guess-display");
var winMessage = "You guessed correctly, good job!";
var lossMessage = "Sorry you have run out of guesses. Want to play again?";
// var resetGameTimer;
//Code to update game vales
winCountText.textContent = winCount;
lossCountText.textContent = lossCount;
turnCountText.textContent = turnCount;
computerLetterText.textContent = computerLetter;

//Creates the array to store the letter selection of the computer at the beginning of each round
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Stores the computers choice from the array above
var computerLetterIndex = Math.floor(Math.random() * computerChoices.length);
// Takes the index from the var above and converts it into the computer's letter
var computerLetter = computerChoices[computerLetterIndex];

//DEBUG
console.log(computerLetter);
// Changes user-guess-display area to show key press
document.onkeyup = function (event) {

    userGuessDisplayText.innerHTML = event.key;
    var userChoice = event.key;

    if (userChoice === computerLetter) {

        winCount++;
        winCountText.textContent = winCount;
        computerLetterText.textContent = computerLetter;
        console.log("if. " + turnCount);
        alert("You guessed correctly, good job!");
        resetGameHandlerWin();

    } else if (turnCount === 1) {
        turnCount--;
        lossCount++;
        lossCountText.textContent = lossCount;
        computerLetterText.textContent = computerLetter;
        console.log("else if. " + turnCount);
        alert("Sorry you have run out of guesses, want to play again?");
        resetGameHandlerLoss();
    } else {
        turnCount--;
        turnCountText.textContent = turnCount;
        console.log("else. " + turnCount);
    }
}

function resetGame() {
    turnCount = 10;
    turnCountText.textContent = turnCount;
    computerLetterIndex = Math.floor(Math.random() * computerChoices.length);
    computerLetter = computerChoices[computerLetterIndex];
    //DEBUG
    console.log(computerLetter);
}

function resetGameHandlerLoss(){
    turnCountText.textContent = lossMessage;
     window.setTimeout(resetGame(), 60000);
}

function resetGameHandlerWin(){
    turnCountText.textContent = winMessage;
     window.setTimeout(resetGame(), 60000);
}
