// JavaScript source code
var figlet = require('figlet');

console.log(figlet.textSync('HANGMAN', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));


(function () {
    'use strict';
    var guessWord = []; //array where the the rendom word is transfered to *
    var word = ['forgive', 'watermelon', 'penthouse', 'origami', 'rome', 'pailot']; //array of words from were it is randomly picked for the game
    var rendomWord = word[Math.floor(Math.random() * word.length)]; //the random pick itself
    var rendomWordArray = rendomWord.split('');
    var completeWord = rendomWord.length // will help know when win
    var attempt = 10 //will help know hoe many attempts are left
    var readlineSync = require('readline-sync');


    for (let i = 0; i < rendomWord.length; i += 1) {
        guessWord.push('*'); // putting the * in the array according to the length of the randomly chosen word
    }


    console.log('You have ' + attempt + ' attempts to guess the word\nThe word is: ' + guessWord.join(''))

    while (completeWord > 0 && attempt > 0) {

        var userGuess = readlineSync.question('what is your guess ? (type a single letter) ').toLowerCase();
        var x = userGuess.length;
        if (userGuess.toLowerCase() == userGuess.toUpperCase() || (x != 1)) {

            console.log('Please enter a single letter');
        }


        for (let l = 0; l < rendomWordArray.length; l += 1) {

            if (userGuess == rendomWordArray[l]) {

                guessWord[l] = userGuess;
                completeWord--;

            }

        }
        if (userGuess.toLowerCase() == userGuess.toUpperCase() || (x != 1)) {
            attempt = attempt;
        }
        else {
            attempt--;
        }
        console.log('You have ' + attempt + ' attempts to guess the word\nThe word is:' + ' ' + guessWord.join(''));

    }
    if (completeWord == 0) {
        console.log('Congrets')
    }
    if (attempt == 0) {
        console.log('Sorry mate, no more guesses for you')
    }


})();
