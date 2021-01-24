// JavaScript source code
(function () {
    'use strict';

    var myarray = [];

    let i = 1;
    while (i < 101) {
        myarray.push(i);
        i += 1;
    }

  //  myarray[6] = 'BOOM';
 //   console.log(myarray);

    let n = 0;
    while (n < 101) {
        if (myarray[n] % 7 == 0 || myarray[n] % 10 == 7 || parseInt(myarray[n] / 10)==7) {
            myarray[n] = 'boom';
        }
        n += 1;
    }

    console.log(myarray);
})();

