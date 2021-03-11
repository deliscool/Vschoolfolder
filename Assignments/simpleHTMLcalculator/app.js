//this version contains no output html element tag
// use flexbox container to have the answer closer to the "="

const form = document["simpleCal"]

const button = document.getElementById("addBtn")
button.addEventListener("click", function(event){
    event.preventDefault()
    console.log("fired")
    const add1 = form.num1.value
    const add2 = form.num2.value
    form.num1.value = ""
    form.num2.value = ""

    const sum = parseInt(add1) + parseInt(add2)
    const answer1 = document.getElementById("sumP") 
    answer1.textContent = sum
    // const h1 = document.createElement('p')
    // h1.textContent = sum
    // document.getElementById("input1").append(h1)
})

const subButton = document.getElementById("subBtn")
subButton.addEventListener("click", function(event){
    event.preventDefault()
    const sub1 = form.num3.value
    const sub2 = form.num4.value
    form.num3.value = ""
    form.num4.value = ""

    const sub = sub1 - sub2

    const answer2 = document.getElementById("sumP")
    answer2.textContent = sub
    // const h2 = document.createElement('p')
    // h2.textContent = sub
    // document.getElementById("input2").append(h2)
})

const mulButton = document.getElementById("mulBtn")
mulButton.addEventListener("click", function(event){
    event.preventDefault()
    const mul1 = form.num5.value
    const mul2 = form.num6.value
    form.num5.value = ""
    form.num6.value = ""

    const mul = mul1 * mul2


    const answer3 = document.getElementById("sumP")
    answer3.textContent = mul
    // const p3 = document.createElement("p")
    // p3.innerText = mul
    // document.getElementById("input3").append(p3)
})