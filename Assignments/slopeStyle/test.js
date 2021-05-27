// use rest operator

function collectAnimals(...animals){
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackalope", "platypus"))

//Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

function combineFruit(...food){
    let [fruit, sweets, vegetables] = food
      return {fruit, sweets, vegetables}
  }

  console.log(combineFruit(["apple", "pear"],["cake", "pie"],["carrot"]))

// Use destructuring to use the property names as variables

const vacation = {
    location: "Burly Idaho",
    duration: "2 weeks"
};

const {location, duration} = vacation;

function parseSentence() {
    return `We're going to have a good time in ${location} for ${duration}`;
}

console.log(parseSentence(vacation))

// Use destructuring to make this code ES6:

//function returnFirst(items){
//    const firstItem = items[0]; //change this line to be eS6*
//    return firstItem
//}

const items = ["shirt", "shoe", "underwear"];

const returnFirst = items => items[0];

console.log(returnFirst(items))

//Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["gardening", "volunteer", "eating", "janitor work", "philianthropy"];
const [activityOne, activityTwo, activityThree] = favoriteActivities;

const returnFavorites = arr => `My top three favorite activities are ${activityOne}, ${activityTwo}, and ${activityThree}.`;

console.log(returnFavorites(favoriteActivities))













