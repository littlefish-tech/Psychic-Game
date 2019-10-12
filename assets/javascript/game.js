<script>
// list of letters computer think
var computerChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// creat variables 
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var yourGuessesSoFar = [];

// create the variables for the ID link to the HTML
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var yourGuessesSoFarText = document.getElementById("yourGuessesSoFar-text");

function updateDom() {
winsText.textContent = wins;
lossesText.textContent = losses;
guessesLeftText.textContent = guessesLeft;
yourGuessesSoFarText.textContent = yourGuessesSoFar;
}

updateDom()
// wins++;
// updateDom()





// This function is run whenever the user presses a key
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key.toLowerCase();
console.log(userGuess + "userguess")

//Randonly chooses a choice from the optio array. This is the Computer's Guess.
var computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
console.log(computerGuess)
// user guess letter vs company guess letter

if (guessesLeft > 0) {
if (computerChoice.indexOf(userGuess) === -1)
alert("You must type a letter")
if (userGuess === computerGuess) {
wins++;
yourGuessesSoFar.push(userGuess)
updateDom()
}else {
guessesLeft--;
yourGuessesSoFar.push(userGuess)
updateDom()
}
}else {
losses++;
guessesLeft = 3;
updateDom()
}

//If I win, I will not loss attempts
// I guessed the letter not in the list, I loss
//If I loss, I will lose attempts

// Hide the directions
//  directionsText.textContent = "";

// Display the user and computer guesses, and wins/losses/ties.
//  userChoiceText.textContent = "You chose: " + userGuess;
//  computerChoiceText.textContent = "The computer chose: " + computerGuess;
//  winsText.textContent = "wins: " + wins;
//  lossesText.textContent = "losses: " + losses;
}

</script>