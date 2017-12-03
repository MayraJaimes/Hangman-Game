var hangManGame = {
	numWins: 0,
	numLosses: 0,
	remainTries: 7,
	outcome: "",
	currentWordPos: "",
	randomWord: "",
	gameOver: false,
	words: ["BASKETBALL", "SOCCER", "BICYCLING", "SWIMMING", "GOLF", "BOWLING", "WRESTLING", "TENNIS", "KAYAKING", "HOCKEY"],
	answerArray: [],
	wrongGuessArray: [],
	rightGuessArray: [],
	imagePos: document.getElementById("image"),
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
		var html = "";
		for (var i = 0; i < this.randomWord.length; i++) {
			this.answerArray.push('_')
			html += '<span class= "letters">' + this.answerArray[i] + '</span>';
		}
		this.answerContent.innerHTML = html;
	},

	hangManImgPosition: function(x) {
		if (this.remainTries >= 4) {
			x = 7-this.remainTries;
			this.imagePos.style.backgroundPosition = -x*162.16 + "px 0px";
		} 
		else {
			x = this.remainTries-3;
			this.imagePos.style.backgroundPosition = x*162.16 + "px -165px";
		}
	},

	resetNextGame: function() {
		this.gameOver = false;	
		this.wrongGuessArray = [];
		this.rightGuessArray = [];
		this.answerArray = [];
		this.remainTries = 7;
		this.outcome = " ";
		this.wrongGuessContent.innerHTML = this.wrongGuessArray;
		this.rightGuessContent.innerHTML = this.rightGuessArray;
		this.answerContent.innerHTML = this.answerArray;
		this.remainTriesContent.innerHTML = this.remainTries;
		this.outcomeContent.innerHTML = this.outcome;
		this.hangManImgPosition(0);
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

				if (this.randomWord.indexOf(userGuess) > -1) {
					var html = "";
					for (var j = 0; j < this.randomWord.length; j++){

						if (this.randomWord[j] === userGuess) {
							this.answerArray[j] = userGuess;
						}
						html += '<span class="lettersCompleted">' + (this.answerArray[j]) + '</span>';
					}
					this.answerContent.innerHTML = html;
					this.rightGuessArray.push(userGuess);
					this.rightGuessContent.innerHTML = this.rightGuessArray.join(" ");

				} else {
					this.wrongGuessArray.push(userGuess);
					this.remainTries--;
					this.wrongGuessContent.innerHTML = this.wrongGuessArray.join(" ");
					this.remainTriesContent.innerHTML = this.remainTries;
					this.hangManImgPosition(0);
				};

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
			    };
			}
		}.bind(this)
	}
};

hangManGame.startGame();









