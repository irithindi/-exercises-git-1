// JavaScript source code
(function () {
    'use strict';

    var readlineSync = require('readline-sync');
    let KosherM = 'n'
    let is_kosher
    var num_ppl;
    var num_ppl_in = readlineSync.question('How many people are you going with? ');
    var num_ppl = parseFloat(num_ppl_in)

    if (isNaN(num_ppl) || num_ppl <=0 || num_ppl %1 !== 0) {
        throw 'Parameter is not valid!'
    }

    is_kosher = readlineSync.question('Should it be Kosher? (y/n) ');
    if ((is_kosher != 'y' && is_kosher != 'n')) {
        throw 'Parameter is not valid!';
       
    }
   
    
    
   
    
    if  ((is_kosher == 'y')) {
        KosherM = readlineSync.question('should it be Kashrut Lemehadrin? (y/n) ');
   
       
    }

    if (KosherM != 'y' && KosherM != 'n') {
      throw 'Parameter is not valid!'
        
    }
    var readlineSync = require('readline-sync'),
        food_type = ['Italian', 'Asian', 'Meat'],
        index = readlineSync.keyInSelect(food_type, 'What kind of food do you want?');



    let resturants = ['Alfredo', 'El Gaucho', 'Oshi Oshi', 'River', 'MinaTomei', 'La Cuchina', 'Silo', 'Tokopia', 'Angus'];

    switch (index) {

        case 0:
            if (is_kosher == 'y' && KosherM == 'y') {
                let recommendation = resturants.slice(0, 1);
                console.log(recommendation);
            }
            else if ((is_kosher == 'y') && (KosherM == 'n')) {
                let recommendation = resturants.slice(5, 6);
                console.log(recommendation);
            }
            else console.log(resturants.slice(6, 7));
            break;

        case 1:
            if (is_kosher == 'y' && KosherM == 'y') {
                let recommendation = resturants.slice(2, 3);
                console.log(recommendation);
            }
            else if (is_kosher == 'y' && KosherM == 'n') {
                let recommendation = resturants.slice(3, 4);
                console.log(recommendation);
            }
            else console.log(resturants.slice(4, 5));
            break;

        case 2:
            if (is_kosher == 'y' && KosherM == 'y') {
                let recommendation = resturants.slice(1, 2);
                console.log(recommendation);
            }
            else if (is_kosher == 'y' && KosherM == 'n') {
                let recommendation = resturants.slice(7, 8);
                console.log(recommendation);
            }
            else console.log(resturants.slice(8, 9));

    }


}
   

)();


