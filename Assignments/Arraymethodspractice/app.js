var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


//console.log("fruit: ", fruit)

//console.log("vegetables: ", vegetables);

//1. removed last item from the vegetables array
//vegetables.pop()
//   console.log(vegetables)

//2. remove the first item from the fruit array
//fruit.shift()
//console.log(fruit)

//3.Use the lenth property to find the legnth of the vegetable array
//console.log(vegetables.length)

//4. Add that number to the end of the fruit array
// var newArray = fruit.concat(vegetables.length)
// console.log(newArray)

//Find the index of "orange." Add that number to the end of the fruit array.
//var orangeIndex = fruit.indexOf("orange")
//var newArray = fruit.concat(orangeIndex)
//console.log(newArray)


// Use the length property to find the length of the vegetable array. Add that number to the end of the vegetable array.

//var vegetableLength = vegetables.concat(vegetables.length)
//console.log(vegetableLength)

//Put the two arrays together into one array. Fruit first. Call the new Array "food". 
//Remove 2 elements from your new array starting at index 4 with one method.
//Reverse your array.
//Turn the array into a string and return it.
var orangeIndex = fruit.indexOf("orange")
var newArray = fruit.concat(orangeIndex)
var vegetableLength = vegetables.concat(vegetables.length)
 var food = fruit.concat(vegetables)
food.splice(4,2)

var reversedArr = food.reverse()

var joinFood = reversedArr.join("")
console.log(joinFood)
