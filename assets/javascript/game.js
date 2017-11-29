// Create words

var words = ["doctor", "teacher", "police", "firefighter"];

//Pick random word from the array

var currentWord = words[Math.floor(Math.random() * words.length)];

//Create array of underscores equal to the number of letters

var lettersArray = [];

for (var i = 0; i < currentWord.length; i++) {
    lettersArray[i] = "_ ";
	}

document.getElementById("lettersArray").textContent = lettersArray;


// This function is run whenever the user presses a key. Then its determined which key was pressed.
document.onkeyup = function(event) {
var userGuess = event.key; }


//IF correct add the letter to the array and decrease the remaining letters number.
//IF incorrect add the userGuess to the wrongGuessArray and decrease the remaining tries number. 

var remainLetters = word.length;
var wrongGuessArray = [];
var remainTries = 15;

	for (var j = 0; j < currentWord.length; j++) {

		if (currentWord[j] === userGuess) {
	    letterArray[j] = useGuess;
		remainLetters--;
	    }

	    else {
	    wrongGuessArray.push(userGuess);
	    remainTries--;
	    }
  }

document.getElementById("remainLetters").textContent = remainLetters;
document.getElementById("wrongGuessArray").textContent = wrongGuessArray;
document.getElementById("remainTries").textContent = remainTries;

