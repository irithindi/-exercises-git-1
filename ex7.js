// JavaScript source code
(function () {
    'use strict';

    var readlineSync = require('readline-sync');

    var posNum = readlineSync.question('Please enter a positive number ');
   var num = parseInt(posNum);
    if (num <= 0) {
        throw 'Parameter is not valid!'
    }

        var myarray = [];
        myarray[0] = num;

        while (num != 1) {
            myarray.push(num - 1);
            num -= 1;
        }

        var multi = 1;
        for (var i = 0; i < myarray.length; i++) {
            multi *= myarray[i]
    }
    console.log(multi);
})();

