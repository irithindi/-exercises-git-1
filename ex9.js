 //JavaScript source code
(function () {
    'use strict';

   var readlineSync = require('readline-sync');
   var input_number = readlineSync.question('Please enter a number bigger than 1 ');

    if (input_number <= 1 || input_number % 1 > 0) {
        throw 'Error';
   }

    var array = [], upperLimit = Math.sqrt(input_number), isprime = [];

    for (var i = 0; i < input_number; i++) {
            array.push(true);
    }

       
        for (var i = 2; i <= upperLimit; i++) {
            if (array[i]) {
                for (var s = i * i; s < input_number; s += i) {
                    array[s] = false;
                }
            }
        }
  
        
    for (var i = 2; i < input_number; i++) {
            if (array[i]) {
                isprime.push(i);
            }
        }

    console.log(isprime);

    
})();

