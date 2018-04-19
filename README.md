# Hangman-Game

## Overview

This is a hangman game where a word is displayed in underscores and the user guesses what letters the word includes.

## Description

The theme for this hangman game is sports. Every time the user plays the game a different word is generated for them to guess. The underscores generated tells the user how manny letters the word has. Key events are used to listen for the letters that the user types. Only letters are accepted as valid inputs. 

As the user guesses a correct letter it is revealed and it replaces the underscores. These letters are also added to the correct guesses word bank. If the user guesses an incorrect letter it is added to the incorrect guesses word bank and the remaining tries decreases by one. Then there is a section that shows the player how many guesses they have remaining.  

If the user tries guessing the same letter twice a message will get displayed stating that the user already guessed that letter. After the user wins or loses the game it automatically chooses another word allowing the user to play again.

## Technologies used:

* HTML5
* CSS
* Javascript
