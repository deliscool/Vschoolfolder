var readlineSync = require('readline-sync')

var num1 = readlineSync.question('What is your first number?');
var num2 = readlineSync.question('What is your second number?');

var question = readlineSync.question('Which operation should I perform (+,-,*,/)?');

function calculateAnswer (num1, num2) {
    if(question === '+'){
        console.log('Your answer is ' + (Number(num1) + Number(num2)))
        }
    else if(question === '-'){
        console.log('Your answer is ' + (Number(num1) - Number(num2)))
        }
    else if(question === '*'){
        console.log('Your answer is ' + (Number(num1) * Number(num2)))
        }
    else if (question === '/'){ 
        console.log('Your answer is ' + (Number(num1) / Number(num2)))  
        }
    }
    
   calculateAnswer(num1,num2)