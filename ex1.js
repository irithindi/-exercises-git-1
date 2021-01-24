// JavaScript source code
(function () {
    'use strict';

    var readlineSync = require('readline-sync');

    var userName = readlineSync.question('May I have your name? ');
    console.log('Hello' + ' '+ userName + '!');

        })();