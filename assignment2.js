// JavaScript source code
(function () {
    'use strict';


    var newAmount = 50;
    var options;




    console.log('\n##################################################### \nWelcome to WAR, your life will never be the same!! \n#####################################################')
    var readlineSync = require('readline-sync');
    var userName = readlineSync.question('Please enter your name: ');
    console.log('Hello' + ' ' + userName + '. We\'ve being waiting for you' + '!');
    console.log('You currently have 50 dollars');

    for (var money = 50; money != 0, options != 2; money = newAmount) {
        var bet = readlineSync.question('Place your bet for the next round 1 to ' + newAmount + ': ');
        var betNum = parseInt(bet);
   
        if (betNum <= 0) {
            console.log('Don\'t you want to play?!?!? Bet something, you fool');
            break;
           
        }
        else if (betNum > money) {
           
            console.log('You wish...');
            break;
        }
        let suits = ['Club', 'Diamond', 'Spades', 'Heart'];
        let randomSuitsUser = Math.floor(Math.random() * suits.length);
      
        let randomSuitsCom = Math.floor(Math.random() * suits.length);
     

        let rendomNumUser = (Math.floor(Math.random() * 12) + 1);
        let rendomNumCom = (Math.floor(Math.random() * 12) + 1);
        console.log('Your card is ' + rendomNumUser + ' ' + suits[randomSuitsUser] + ' And my card is ' + rendomNumCom + ' ' + suits[randomSuitsCom]);

      
        if (rendomNumUser == rendomNumCom) {
            bet = readlineSync.question('It\'s a tie, Place another bet');
            betNum = parseInt(bet);
        }
        else if (rendomNumUser > rendomNumCom) {
  
            newAmount = (money + betNum);
   
            console.log('You did it!! You won ' + bet + ' dolars and now have ' + newAmount + ' dolars');
            options = readlineSync.question('What would you like to do?\n1. Play another round\n2. Leave with my money');
            console.log(typeof options);
        }
        else {
            newAmount = (money - betNum);

            if (newAmount == 0) {
          
                console.log('You lost all your money ' + betNum + ' dolars. ');
                break;
            }
            else {
                console.log('You lost ' + bet + ' dolars and now you have ' + newAmount + ' dolars');
                options = readlineSync.question('What would you like to do?\n1. Play another round\n2. Leave with my money');
            }
        }
    }


    if (options = 2) {
        console.log('You have ' + ' ' + newAmount + ' dollars');
       
        console.log('Farwell');
    }
})();
