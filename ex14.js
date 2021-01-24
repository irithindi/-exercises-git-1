// JavaScript source code
(function () {
    'use strict';

    var readlineSync = require('readline-sync');

    var a = readlineSync.question('Please enter a number ');

    var num1 = parseInt(a)
    var array = [];

    for (let i = 0; i < num1; i += 1) {
        let random = Math.floor(Math.random() * 50)+1;
    
      array.push(random);
    }
  
    let maxNum = Math.max(...array);
    let minNum = Math.min(...array);

    console.log('min is' + ' ' + minNum);
    console.log('max is' + ' ' + maxNum);

})();

