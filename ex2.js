// JavaScript source code
(function () {
    'use strict';

    var readlineSync = require('readline-sync');

    var a = readlineSync.question('Please enter a number ');
    var b = readlineSync.question('Please enter a second number ');

    var num1 = parseInt(a)
    var num2 = parseInt(b)

    var sum_num = num1 + num2;
 
    if (sum_num == 10) {
        console.log('made 10');
    }
    else {
        console.log('nope');
    }
   
})();
