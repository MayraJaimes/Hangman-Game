var hangManGame = {
	numWins: 0,
	numLosses: 0,
	remainTries: 10,
	outcome: "",
	currentWordPos: "",
	userGuess: "",
	randomWord: "",
	gameOver: false,
	words: ["BASKETBALL", "SOCCER", "BICYCLING", "SWIMMING", "GOLF", "BOWLING", "WRESTLING", "TENNIS", "KAYAKING", "HOCKEY"],
	answerArray: [],
	wrongGuessArray: [],
	rightGuessArray: [],
	wrongGuessContent: document.getElementById("wrongGuessContent"),
	rightGuessContent: document.getElementById("rightGuessContent"),
	answerContent: document.getElementById("answerContent"),
	remainTriesContent: document.getElementById("remainTriesContent"),
	outcomeContent: document.getElementById("outcomeContent"),
	numWinsContent: document.getElementById("numWinsContent"),
	numLossesContent: document.getElementById("numLossesContent"),	

	generateWord: function() {
	  var wordPos = Math.floor(Math.random() * this.words.length);
	  if (this.currentWordPos === wordPos) {
	    generateWord();
	  } else {
	    this.currentWordPos = wordPos;
	    this.randomWord = this.words[wordPos];
	  }
	},

	generateUnderscore: function() {
		for (var i = 0; i < this.randomWord.length; i++) {
			this.answerArray.push('_');
		}
		this.answerContent.textContent = this.answerArray.join(" ");
	},

	resetNextGame: function() {
		this.gameOver = false;	
		this.wrongGuessArray = [];
		this.rightGuessArray = [];
		this.answerArray = [];
		this.remainTries = 10;
		this.outcome = " ";
		this.wrongGuessContent.textContent = this.wrongGuessArray;
		this.rightGuessContent.textContent = this.rightGuessArray;
		this.answerContent.textContent = this.answerArray;
		this.remainTriesContent.textContent = this.remainTries;
		this.outcomeContent.textContent = this.outcome;
	},

	startGame: function() {
		console.log('startGame');
		this.generateWord();
		this.generateUnderscore();

		var thisGame = this;

		document.onkeyup = function(event) {
			this.userGuess = event.key.toUpperCase();
			
			if (event.keyCode === 83 && this.gameOver == true){
				this.resetNextGame();
				this.startGame();
			}
			
			else if (event.keyCode >= 65 && event.keyCode <= 90 && this.gameOver == false){
				//Conditional statements for right and wrong guesses:
				if (this.randomWord.indexOf(this.userGuess) > -1) {
					for (var j = 0; j < this.randomWord.length; j++){
						if (this.randomWord[j] === this.userGuess) {
							this.answerArray[j] = this.userGuess;	
						}
					}
					this.rightGuessArray.push(this.userGuess);
					this.answerContent.textContent = this.answerArray.join(" ");
					this.rightGuessContent.textContent = this.rightGuessArray.join(" ");

				} else {
					this.wrongGuessArray.push(this.userGuess);
					this.remainTries--;
					this.wrongGuessContent.textContent = this.wrongGuessArray.join(" ");
					this.remainTriesContent.textContent = this.remainTries;
				}
				//Conditional statements for win and loss games:
				if (this.answerArray.join("") === this.randomWord) {
					this.numWins ++;
			        this.outcome = 'YOU WON! Press "s" to play another word';
			        this.gameOver = true;
			        this.numWinsContent.textContent = this.numWins;
			        this.outcomeContent.textContent = this.outcome;
				} else if (this.remainTries === 0) {
					this.numLosses ++;
			        this.outcome = 'YOU LOST! Press "s" to play another word';
			        this.gameOver = true;
			        this.numLossesContent.textContent = this.numLosses;
			        this.outcomeContent.textContent = this.outcome;
			    }
			}
		}.bind(this)
	}
};

hangManGame.startGame();

