// JavaScript source code
(function () {
    'use strict';

    var readlineSync = require('readline-sync');

    var input_number = readlineSync.question('Please enter a number between 0-9 ');

    let myArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    console.log(myArray[input_number]);
})();
