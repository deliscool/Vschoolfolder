var fruit = ["banana", "orange", "apple", "kiwi"]


// loop that prints to the console the numbers 0 through 9
//for (let i = 0; i <= 9; i++) {
//    console.log(i)
//    }

//loop that prints to the console 9 to 0
//for (let i = 9; i >= 0; i--) {
//    console.log(i)
//   }

//loop that prints these fruits to the console

//for (let i = 0; i < fruit.length; i++) {
//    console.log(fruit[i])
//    }


// for loop that will push the numbers 0 through 9 to an array
//var newArray = [];

//for (var i = 0; i < 10; i++) {
//    newArray.push(i)
//}
//console.log(newArray)

// for loop that prints to the console only even numbers 0 through 100
//for (var i = 0; i < 100; i++) {
//    console.log(i++)
//}

//for loop that will push every other fruit to an array
//var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

//for loop that will push every other fruit to an array.
for (var i = 0; i < fruit.length; i++) {
console.log(fruit[i++])
}

//Silver Medal

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations

  //a loop that will print out all the names of the people of the people array

  //for (let i = 0; i < peopleArray.length; i++) {
  //  console.log(peopleArray[i].name)
  //   }

  //loop that pushes the names into a names array, and the occupations into an occupations array.
  
//peopleArray.push("Harrison Ford", "Vladimir Putin")
//console.log(peopleArray)

//let namesArray = []
//let occupationArray = []
//for(let i = 0; i < peopleArray.length; i++){
//    (occupationArray.push(peopleArray[i].occupation) && namesArray.push(peopleArray[i].name))
//}
//console.log(occupationArray)
//    console.log(namesArray)


//gold Nested
var newArr = []
for (var i = 0; i <= 2; i++) {
   var newArr2 = [];
   for (var j = 0; j <= 2; j++) {
       newArr2.push(0);
   }
   newArr.push(newArr2)
}
console.log(newArr);