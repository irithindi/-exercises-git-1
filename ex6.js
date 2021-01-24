// JavaScript source code
(function () {
    'use strict';

    var readlineSync = require('readline-sync');

    var input_number = readlineSync.question('Please choose a number larger than 10 ');
    var num = parseInt(input_number);


    if (num > 10) {
        console.log('Thank you');
    }


    if (num < 10) {
        while (num < 10) {
            input_number = readlineSync.question('Please choose a number LARGER than 10 ');
            num = parseInt(input_number);
        }

      if (num > 10) {
        console.log('Thank you');
    }
    }
      
})();
