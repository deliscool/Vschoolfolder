//Step one Write a function that gets the JSON and parses the JSON to create an array of objects.


const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function () {
    if(this.readyState === 4 && status ===200) {
        const JSONdata = xhr.responseText
        const pdata = JSON.parse(JASONdata)
        console.log (parsedData.objects[0].pokemon)
        displayData(parsedData.objects[0].pokemon)
    }
}


//Step Two Make each Pokemon's name show up on a separate line in the browser. You will be using a for loop to iterate through each pokemon object, and some DOM mamnipulation to add nodes for each Pokemon.

function displayData (arr){
    for(let i =0 ; i < arr.length ; i ++){
        const paragraph = document.createElement("p")
        paragraph.textContent = `${arr[i].name} with a description of ${arr[i].resource_url}`
        document.body.appendChild(p)
    }
}


//Extra Credit Extra Credit Display details about each pokemon