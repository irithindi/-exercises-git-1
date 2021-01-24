// JavaScript source code
(function () {
    'use strict';

    var readlineSync = require('readline-sync');

    var word = readlineSync.question('Please write  a word ');
  
    var arr = word.split("");
    let l = (word.length - 1)

    let palindrome = 'the string is not a palindrome';

    for (let i = 0, l = (word.length - 1); i!== l; i += 1, l -= 1) {

        if (arr[0] == arr[l]) {
            palindrome = 'the string is  a palindrome';
        }
      
    }


    console.log(palindrome);


})();

