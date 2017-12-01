//Global variables
var numWins = 0;
var numLosses = 0;
var remainTries = 10;
var outcome;
var currentWordPos;
var userGuess;
var randomWord;

//Arrays
var words = ["doctor", "teacher", "police", "firefighter"];
var answerArray = [];
var wrongGuessArray = [];
var rightGuessArray = [];

//Variables to get Elements
var wrongGuessContent = document.getElementById("wrongGuessContent");
var rightGuessContent = document.getElementById("rightGuessContent");
var answerContent = document.getElementById("answerContent");
var remainTriesContent = document.getElementById("remainTriesContent");
var outcomeContent = document.getElementById("outcomeContent");
var numWinsContent = document.getElementById("numWinsContent");
var numLossesContent = document.getElementById("numLossesContent")

//Functions:
function generateWord() {
  var wordPos = Math.floor(Math.random() * words.length);
  if (currentWordPos === wordPos) {
    generateWord();
  } else {
    currentWordPos = wordPos;
    randomWord = words[wordPos];
  }
};

function generateUnderscore () {
	for (var i = 0; i < randomWord.length; i++) {
		answerArray.push('_');
	}
};

function resetNextGame() {
	document.onkeyup = function(event) {
		userGuess = event.key;
		if (event.keyCode = 12){
			wrongGuessArray = [];
			rightGuessArray = [];
			answerArray = [];
			remainTries = 10;
			outcome = " ";
			wrongGuessContent.textContent = wrongGuessArray;
			rightGuessContent.textContent = rightGuessArray;
			answerContent.textContent = answerArray;
			remainTriesContent.textContent = remainTries;
			outcomeContent.textContent = outcome;
		}
	}
};

function startGame(){
generateWord();
generateUnderscore();

	document.onkeyup = function(event) {
	userGuess = event.key;
		if (event.keyCode >= 65 && event.keyCode <= 90){

			//Conditional statements for right and wrong guesses:
			if (randomWord.indexOf(userGuess) > -1) {
				for (var j = 0; j < randomWord.length; j++){
					if (randomWord[j] === userGuess) {
						answerArray[j] = userGuess;	
					}
				}
				rightGuessArray.push(userGuess);
				answerContent.textContent = answerArray.join(" ");
				rightGuessContent.textContent = rightGuessArray.join(" ");

			} else {
				wrongGuessArray.push(userGuess);
				remainTries--;
				wrongGuessContent.textContent = wrongGuessArray.join(" ");
				remainTriesContent.textContent = remainTries;
			}

			//Conditional statements for win and loss games:
			if (answerArray.join("") === randomWord) {
				numWins ++;
		        outcome = "You won!";
		        numWinsContent.textContent = numWins;
		        outcomeContent.textContent = outcome;
		        resetNextGame();
			} else if (remainTries === 0) {
				numLosses ++;
		        outcome = "You lost!";
		        numLossesContent.textContent = numLosses;
		        outcomeContent.textContent = outcome;
		        resetNextGame();
		    }
		}
	}
}

startGame();