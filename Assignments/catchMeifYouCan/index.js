// 1a) Write a function that returns the sum of two numbers. 
// Throw an error if either argument is not of the data type number:

function sum (x,y) {
    if (Number.isInteger(x) && Number.isInteger(y)) {
        console.log (x + "plus" + y + "equals" + (x + y))
    } else {
        throw new Error ("It's not a number")
    }
}

// 1b) Call the sum function inside a try block using "1" and "2" as arguments. 
// Use console.log within a catch block to inform the user of the error.

try {
    sum (1,2)
}
catch (err) {
    console.log(err)
}
finally {
}

// 2a) Given a user object, write a function called login that takes a username and password as parameters. 
// Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

var user = {username: "del", password: "123abc"};
function login(username, password){
    if (username === user.username && password === user.password) {
        console.log("Logged in")
    } else {
        throw new Error("Incorrect Username or Password, try again.")
    }
}

// 2b) Call the login function within a try block. 
// In one instance use the correct credentials, and in another use incorrect ones. 
// Make sure you see the appropriate message!

try {
    login("Del", "123abc")
} 
catch(err) {
    console.log(err)
} 
finally {
}
