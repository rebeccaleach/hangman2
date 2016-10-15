// randomly selects a word

var wordsArray;
var wordSelection;
var lettersArray;

function generateWordToGuess() {

	wordsArray = ['malinda', 'rebecca', 'brian', 'kristin', 'nora', 'olive', 'margo', 'luca', 'jace', 'godric', 'scott', 'justine', 'audrey', 'deanna', 'kate', 'helen', 'henry', 'christopher', 'liz', 'raymond', 'jean', 'amy', 'abby', 'caleb'];

	wordSelection = wordsArray[Math.floor(Math.random() * wordsArray.length)];

	lettersArray = wordSelection.split('');

	console.log(lettersArray);

};

exports = generateWordToGuess;

var letter = require('./word.js');