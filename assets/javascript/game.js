var hangManGame = {
	numWins: 0,
	numLosses: 0,
	remainTries: 10,
	outcome: "",
	currentWordPos: "",
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
		this.answerContent.innerHTML = this.answerArray.join(" ");
	},

	resetNextGame: function() {
		this.gameOver = false;	
		this.wrongGuessArray = [];
		this.rightGuessArray = [];
		this.answerArray = [];
		this.remainTries = 10;
		this.outcome = " ";
		this.wrongGuessContent.innerHTML = this.wrongGuessArray;
		this.rightGuessContent.innerHTML = this.rightGuessArray;
		this.answerContent.innerHTML = this.answerArray;
		this.remainTriesContent.innerHTML = this.remainTries;
		this.outcomeContent.innerHTML = this.outcome;
	},

	startGame: function() {
		console.log('startGame');
		this.generateWord();
		this.generateUnderscore();

		document.onkeyup = function(event) {
			var userGuess = event.key.toUpperCase();
			
			if (event.keyCode === 83 && this.gameOver == true){
				this.resetNextGame();
				this.startGame();
			}
			
			else if (event.keyCode >= 65 && event.keyCode <= 90 && this.gameOver == false){
				if (this.wrongGuessArray.includes(userGuess) || this.rightGuessArray.includes(userGuess)){
					this.outcome = "You already guessed this letter. Please guess another one.";
					this.outcomeContent.innerHTML = this.outcome;
					return;
				}

				this.outcome = "";
				this.outcomeContent.innerHTML = this.outcome;

				if (this.randomWord.indexOf(userGuess) > -1) {
					for (var j = 0; j < this.randomWord.length; j++){
						if (this.randomWord[j] === userGuess) {
							this.answerArray[j] = userGuess;	
						}
					}
					this.rightGuessArray.push(userGuess);
					this.answerContent.innerHTML = this.answerArray.join(" ");
					this.rightGuessContent.innerHTML = this.rightGuessArray.join(" ");

				} else {
					this.wrongGuessArray.push(userGuess);
					this.remainTries--;
					this.wrongGuessContent.innerHTML = this.wrongGuessArray.join(" ");
					this.remainTriesContent.innerHTML = this.remainTries;
				}
				//Conditional statements for win and loss games:
				if (this.answerArray.join("") === this.randomWord) {
					this.numWins ++;
			        this.outcome = 'YOU WON! Press "s" to play another word';
			        this.gameOver = true;
			        this.numWinsContent.innerHTML = this.numWins;
			        this.outcomeContent.innerHTML = this.outcome;
				} else if (this.remainTries === 0) {
					this.numLosses ++;
			        this.outcome = 'YOU LOST! Press "s" to play another word';
			        this.gameOver = true;
			        this.numLossesContent.innerHTML = this.numLosses;
			        this.outcomeContent.innerHTML = this.outcome;
			    }
			}
		}.bind(this)
	}
};

hangManGame.startGame();

