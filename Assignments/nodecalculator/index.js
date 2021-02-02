var readlineSync = require('readline-sync');

var num1 = readline.question('What is your first number? ')
var num2 = readline.question('What is your second number?')
var question = readline.question('Which operation should I perform?');

function calculateAnswer (num1, num2) {
    if(ops[answer] === '+'){
        console.log('The answer is ' + num1 + num2 +'!')
    }
    else if(ops[answer] === '-'){
        console.log('The answer is ' + num1 - num2 +'!')
    }
    else if(ops[answer] === 'x'){
        console.log('The asnwer is ' + num1 * num2 +'!')
    }
    else {
        console.log("The asnwer is" + num1 / num2 +'!')
    }
calculateAnswer(num1,num2)
 