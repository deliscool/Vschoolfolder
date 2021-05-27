const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200){
        const JASONdata = xhr.responseText;
        const parse = JSON.parse(JASONdata)
        showData(parse.objects[0].pokemon)

    }
}

let body = document.querySelector("div")

function showData(thing) {

    for (let i = 0; i < thing.length; i++) {
        const h1 = document.createElement('h1')
        h1.innerText = thing[i].name;
        document.body.appendChild(h1)
    }
}