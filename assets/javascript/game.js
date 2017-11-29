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

//Picks random word from the words array


function resetNewWord(){
	document.onkeyup = function(event) {
	var userGuess = event.key;
	if (event.keyCode = 12){
		remainTries = 10;
		document.getElementById("remainTries").textContent = remainTries;
		outcome = "";
		document.getElementById("outcome").textContent = outcome;
		}
	}
}

function resetNewGame(){

}

var randomWord = words [Math.floor(Math.random() * words.length)];

for (var i = 0; i < randomWord.length; i++) {
	    answerArray.push('_');
	    document.getElementById("remainTries").textContent = remainTries;
	}

		document.getElementById("answerArray").textContent = answerArray.join(" ");

// Determines which key was pressed.
document.onkeyup = function(event) {
	var userGuess = event.key;
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
        resetNewWord();
	}

	else if (remainTries === 0) {
		numLosses ++;
        outcome = "You lost!";
        document.getElementById("numLosses").textContent = numLosses;
        document.getElementById("outcome").textContent = outcome;
        resetNewWord();
    }

	else {
		return;
	}
}
}

 


//Conditional statements for right and wrong guesses:









/*
	//After win or lose pick a new word display play new game button next to reset button

	//When play new game is pressed, reset 

	//IF click reset everything: numWins, numLosses, remainLetters, wrongGuessArray, remainTries, letters array, 
	var reset = 0;

	while (remainingLetters > 0) {
	}
}

*/


