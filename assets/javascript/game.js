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

var randomWord = words [Math.floor(Math.random() * words.length)];

for (var i = 0; i < randomWord.length; i++) {
	    answerArray.push('_');
	    document.getElementById("answerArray").textContent = answerArray.join(" ");
	    document.getElementById("remainTries").textContent = remainTries;
	}

// Determines which key was pressed.
document.onkeyup = function(event) {
	var userGuess = event.key;

//Conditional statements for right and wrong guesses:

	if (randomWord.indexOf(userGuess) > -1) {
		for (var j = 0; j < randomWord.length; j++){
			if (randomWord[j] === userGuess) {
				answerArray[j] = userGuess;
				rightGuessArray.push(userGuess);
				document.getElementById("rightGuessArray").textContent = rightGuessArray.join(" ");
			}
		}
	}

	else {
		wrongGuessArray.push(userGuess);
		document.getElementById("wrongGuessArray").textContent = wrongGuessArray.join(" ");
		remainTries --;
		document.getElementById("remainTries").textContent = remainTries;
	}

//Conditional statements for win and loss games:
	if (answerArray === randomWord) {
		numWins ++;
        outcome = "You won!";
        document.getElementById("numWins").textContent = numWins;
	}

	else if (remainTries === 0) {
		numLosses ++;
        outcome = "You lost!";
        document.getElementById("numLosses").textContent = numLosses;
         document.getElementById("outcome").textContent = outcome;
    }
}







/*
	//After win or lose pick a new word display play new game button next to reset button

	//When play new game is pressed, reset 

	//IF click reset everything: numWins, numLosses, remainLetters, wrongGuessArray, remainTries, letters array, 
	var reset = 0;

	while (remainingLetters > 0) {
	}
}

*/


