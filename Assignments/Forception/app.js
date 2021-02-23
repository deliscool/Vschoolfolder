//resources https://cdn.educba.com/academy/wp-content/uploads/2020/03/nested-loop-in-javascript.jpg
//Assignment - Write a function that takes two arrays as parameters. The first array will be an array of people's names, and the second array will be the alphabet. Using a for loop within a for loop, create and return array that looks like this:

// A loop within a loop - nested loop with arrays method

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet) {
    var splitAlphabet = alphabet.toUpperCase().split("");
    var result = [];

    for (var i = 0; i < people.length; i++) {
        let names = people[i];
        result.push(names)
        for (var j = 0; j < splitAlphabet.length; j++) {
            result.push(splitAlphabet[j]);
        }
    }
    return result;
}
console.log(forception(people, alphabet));