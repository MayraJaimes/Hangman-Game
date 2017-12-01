//Global variables
var d = document;
var numWins = 0;
var numLosses = 0;
var remainTries = 10;
var outcome;
var currentWordPos;
var userGuess;
var randomWord;
var gameOver = false;

//Arrays
var words = ["DOCTOR", "TEACHER", "POLICE", "NURSE"];
var answerArray = [];
var wrongGuessArray = [];
var rightGuessArray = [];

//Variables to get Elements
var wrongGuessContent = d.getElementById("wrongGuessContent");
var rightGuessContent = d.getElementById("rightGuessContent");
var answerContent = d.getElementById("answerContent");
var remainTriesContent = d.getElementById("remainTriesContent");
var outcomeContent = d.getElementById("outcomeContent");
var numWinsContent = d.getElementById("numWinsContent");
var numLossesContent = d.getElementById("numLossesContent")

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
	answerContent.textContent = answerArray.join(" ");
};

function resetNextGame() {
	gameOver = false;	
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
};

function startGame(){
	generateWord();
	generateUnderscore();

	document.onkeyup = function(event) {
	userGuess = event.key.toUpperCase();

		if (event.keyCode === 83 && gameOver == true){
			resetNextGame();
			startGame();
		}
		
		else if (event.keyCode >= 65 && event.keyCode <= 90 && gameOver == false){

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
		        outcome = 'YOU WON! Press "s" to play another word';
		        gameOver = true;
		        numWinsContent.textContent = numWins;
		        outcomeContent.textContent = outcome;
			} else if (remainTries === 0) {
				numLosses ++;
		        outcome = 'YOU LOST! Press "s" to play another word';
		        gameOver = true;
		        numLossesContent.textContent = numLosses;
		        outcomeContent.textContent = outcome;
		    }
		}
	}
}

startGame();