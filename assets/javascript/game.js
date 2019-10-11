// list of letters computer think
var computerChoice = ["n", "p","r","l", "s"]
// Create variables that hold references to the places in the HTML where we want to display things.

console.log(wins);
var wins = 0;
var losses = 0;

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
// This function is run whenever the user presses a key
document.onkeyup = function(event) {

// Determines which ey was pressed.
var userGuess = event.key;
//Randonly chooses a choice from the optio array. This is the Computer's Guess.
var computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length];
// user guess letter vs company guess letter
if ((userGuess ==="n") && (computerGuess === "n")) {
    wins++;
}
if ((userGuess ==="r") && (computerGuess === "r")) {
    wins++;
}

if ((userGuess ==="p") && (computerGuess === "p")) {
    wins++;
}
if ((userGuess ==="l") && (computerGuess === "l")) {
    wins++;
}
if ((userGuess ==="s") && (computerGuess === "s")) {
    wins++;
} else {
    losses++;
}
//If I win, I will not loss attempts
// I guessed the letter not in the list, I loss
//If I loss, I will lose attempts

 // Hide the directions
 directionsText.textContent = "";

 // Display the user and computer guesses, and wins/losses/ties.
 userChoiceText.textContent = "You chose: " + userGuess;
 computerChoiceText.textContent = "The computer chose: " + computerGuess;
 winsText.textContent = "wins: " + wins;
 lossesText.textContent = "losses: " + losses;
}