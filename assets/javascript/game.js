//Global variables
var numWins= 0;
var numLosses = 0;
var remainTries = 10;
var outcome;

//Arrays
var words = ["doctor", "teacher", "police", "firefighter"];
var answerArray = [];
var wrongGuessArray = [];
var rightGuessArray = [];

var userGuess;

var randomWord = words [Math.floor(Math.random() * words.length)];

//List of Functions:

function generateWord() {
	var randomWord = words [Math.floor(Math.random() * words.length)];
};

function generateUnderscore () {
	for (var i = 0; i < randomWord.length; i++) {
		answerArray.push('_');
		document.getElementById("remainTries").textContent = remainTries;
	}
	document.getElementById("answerArray").textContent = answerArray.join(" ");
};

function resetNextGame() {
	document.onkeyup = function(event) {
	userGuess = event.key;
	if (event.keyCode = 12){
		wrongGuessArray = [];
		document.getElementById("wrongGuessArray").textContent = wrongGuessArray;
		rightGuessArray = [];
		document.getElementById("rightGuessArray").textContent = rightGuessArray;
		answerArray = [];
		document.getElementById("answerArray").textContent = answerArray;
		remainTries = 10;
		document.getElementById("remainTries").textContent = remainTries;
		outcome = " ";
		document.getElementById("outcome").textContent = outcome;
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
			document.getElementById("answerArray").textContent = answerArray.join(" ");
			rightGuessArray.push(userGuess);
			document.getElementById("rightGuessArray").textContent = rightGuessArray.join(" ");

			}
			else {
				wrongGuessArray.push(userGuess);
				document.getElementById("wrongGuessArray").textContent = wrongGuessArray.join(" ");
				remainTries --;
				document.getElementById("remainTries").textContent = remainTries;
			}

			//Conditional statements for win and loss games:
			if (answerArray.join("") === randomWord) {
				numWins ++;
				document.getElementById("numWins").textContent = numWins;
		        outcome = "You won!";
		        document.getElementById("outcome").textContent = outcome;
		        resetNextGame();
			}

			else if (remainTries === 0) {
				numLosses ++;
		        outcome = "You lost!";
		        document.getElementById("numLosses").textContent = numLosses;
		        document.getElementById("outcome").textContent = outcome;
		        resetNextGame();
		    }
		else {
			return;
			}
		}
	}
}

startGame();


/*
	//After win or lose pick a new word display play new game button next to reset button

	//Start Over: Make function that resets everythnig. 


*/

