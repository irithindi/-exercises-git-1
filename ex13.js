// JavaScript source code
(function () {
    'use strict';


    var readlineSync = require('readline-sync');

    var str = readlineSync.question('Please write  a sentance: ');

    var strSplit = str.split(' ');
    var longestWordLength = 0;
    var longestWord;
    for (var i = 0; i < strSplit.length; i += 1) {

        if (strSplit[i].length > longestWordLength) {
            longestWord = strSplit[i];
            longestWordLength = strSplit[i].length

        }

    }
    console.log(longestWord);

})();
