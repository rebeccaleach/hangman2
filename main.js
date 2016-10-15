// contains the logic, starts the game in the terminal

var inquirer = require('inquirer');
var game = require('./game.js');

var guessesCounter = 0;

function guessLetters() {
	if (guessesCounter < 10) {
		inquirer.prompt([{
			name: "guess",
			message: "Guess a letter"
		}])
		.then(function(answers) {
			var newGuess = new Letter();
			console.log(newGuess);
			if (lettersArray.indexOf(newGuess) >= 0) {
				console.log('You guessed a letter!');
				Letter.show();
				guessLetters();
			}
		})
	}
	
}

guessLetters();



// if (countryList.indexOf(code) >= 0) {
//    // do stuff here
// }