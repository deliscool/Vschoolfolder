//Step one Write a function that gets the JSON and parses the JSON to create an array of objects that look like this:

//Step Two Make each Pokemon's name show up on a separate line in the browser. You will be using a for loop to iterate through each pokemon object, and some DOM mamnipulation to add nodes for each Pokemon.

const xhr = new XMLHttpRequest()

xhr.open("GET", "https://pokeapi.co/api")

//Extra Credit Extra Credit Display details about each pokemon