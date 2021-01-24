// JavaScript source code
(function () {
    'use strict';

    var readlineSync = require('readline-sync');

    var input_string = readlineSync.question('Please enter a santance ');

    var string = input_string.replace(/ /g, "*");
    console.log(string);

})();

