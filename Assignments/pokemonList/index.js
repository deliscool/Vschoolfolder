//Step one Write a function that gets the JSON and parses the JSON to create an array of objects.

const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send();

xhr.onreadystatechange = function () {
    if(this.readyState === 4 && status ===200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(showData(data.results))
    }
}


//Step Two Make each Pokemon's name show up on a separate line in the browser. You will be using a for loop to iterate through each pokemon object, and some DOM mamnipulation to add nodes for each Pokemon.

function showData(arr){
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        const h2 = document.createElement('h2')
        h1.textContent = `This Pokemon's name is ${arr[i].name}`
        h2.textContent = `You can find more info about them at ${arr[i].url}`
        document.body.appendChild(h1)
        document.body.appendChild(h2)
    }
}        

//Extra Credit Extra Credit Display details about each pokemon.