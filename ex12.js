// JavaScript source code
(function () {
    'use strict';

    var readlineSync = require('readline-sync');

    var str = readlineSync.question('Please write  a sentance ');

    var newstr= [];
    for (let x = 0; x < str.length; x += 1) {
        switch (str[x]) {
            case 'a':
                var newstr = newstr+str[x].replace('a', 'A');
                break;

            case 'e':
                var newstr = newstr + str[x].replace('e', 'E');
                break;

            case 'i':
                var newstr = newstr + str[x].replace('i', 'I');
                break;

            case 'o':
                var newstr = newstr + str[x].replace('o', 'O');
                break;

            case 'u':
                var newstr = newstr + str[x].replace('u', 'U');
                break;

            case 'y':
                var newstr = newstr + str[x].replace('y', 'Y');
                break;

            default:
                var newstr = newstr + str[x];
        }
    }
        console.log(newstr);


})();
