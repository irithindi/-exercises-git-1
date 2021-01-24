// JavaScript source code
(function () {
    'use strict';
    let sum1
    let sum2
    let sum3
    let sum4
    let sum5
  

    console.log('\n################# \nHello! Welcom to the quiz! \n#################')
    var readlineSync = require('readline-sync');
    console.log('First Question\n------------------')

    var readlineSync = require('readline-sync'),
        AnswareQ1 = ['I sleep with it. Always be prepared', 'Only on special occations', 'You mean the ninja appliance, right?', 'Can I change the question?'],
        index1 = readlineSync.keyInSelect(AnswareQ1, 'Where do you wear your ninja mask to');
    console.log(index1);
    console.log('Second Question\n------------------')

    var readlineSync = require('readline-sync'),
        AnswareQ2 = ['I bought my first black belt at Zara, I was 12. How exiting!!!', 'I\'m one belt away from the black one', 'I became a master at the age of 3', ' I recieved it when I was on camp Ninja.com when I was 7 years old'],
        index2 = readlineSync.keyInSelect(AnswareQ2, 'How old where you when you recieved your black belt');
    console.log(index2);
    console.log('Third Question\n ------------------')

    var readlineSync = require('readline-sync'),
        AnswareQ3 = ['I prefer rescuing during the day, so I can see...', 'While hanging upside-down from a cliff', 'Are there innocent people out there?', ' Mmm... The last person I rescued was my sister from a makeup disaster'],
        index3 = readlineSync.keyInSelect(AnswareQ3, 'when do you prefer to rescue innocent bystanders?');
    console.log(index3);
    console.log('Fourth Question\n ------------------')

    var readlineSync = require('readline-sync'),
        AnswareQ4 = ['Resign', 'The ninja is the one in black, right?', 'Harikiri', ' A failur is not an option'],
        index4 = readlineSync.keyInSelect(AnswareQ4, 'If a ninja fails to perform, what the punishment should be?');
    console.log(index4);
    console.log('Fifth Question\n ------------------')

    var readlineSync = require('readline-sync'),
        AnswareQ5 = ['I can kill 3 people while wearing bells and you wouldn\'t hear me', 'As a mouse?', 'I won the wispering contest on my third grade', ' I\'m really quiet when no one is in the room'],
        index5 = readlineSync.keyInSelect(AnswareQ5, 'How quiet can you be?');
    
    if (index1 == 0) {
        sum1 = 20;
    } else if (index1 == 1) {
        sum1 = 15;
    } else if (index1 == 2) {
        sum1 = 10;
    } else {
        sum1 = 5;
    }
    
    if (index2 == 0) {
        sum2 = 5;
    } else if (index2 == 1) {
        sum2 = 10;
    } else if (index2 == 2) {
        sum2 = 20;
    } else {
        sum2 = 15;
    }
    
    if (index3 == 0) {
        sum3 = 15;
    } else if (index3 == 1) {
        sum3 = 20;
    } else if (index3 == 2) {
        sum3 = 5;
    } else {
        sum3 = 10;
    }
    
    if (index4 == 0) {
        sum4 = 10;
    } else if (index4 == 1) {
        sum4 = 5;
    } else if (index4 == 2) {
        sum4 = 15;
    } else {
        sum4 = 20;
    }
    
    if (index5 == 0) {
        sum5 = 20;
    } else if (index5 == 1) {
        sum5 = 10;
    } else if (index5 == 2) {
        sum5 = 5;
    } else {
        sum5 = 15;
    }
    
    let sum = sum1 + sum2 + sum3 + sum4 + sum5;
   
    if (sum >= 76) {
        console.log( '\n~~~~~~~~~~~~~~~~~Quiz results~~~~~~~~~~~~~\nYou are as ninja as they come, you will grow up to be Michael Dudikoff Jr.');
    } else if (sum < 76 && sum >= 63) {
        console.log('\n~~~~~~~~~~~~~~~~~Quiz results~~~~~~~~~~~~~.\nThere is still some job to be done, we recommand you do some more wax on wax off');
    } else if (sum < 63 && sum >= 48) {
        console.log('\n~~~~~~~~~~~~~~~~~Quiz results~~~~~~~~~~~~~.\nYou are too sober to take this quiz, hit the bar and come back for another try');
    } else {
        console.log('\n~~~~~~~~~~~~~~~~~Quiz results~~~~~~~~~~~~~.\nWell, we are sure that you are enjoing yourself in Lalaland with the unicorns and all the rainbows, keep it up');
    }
})();