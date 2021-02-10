const squareBlock = document.getElementById("square")

squareBlock.addEventListener("mouseover", function(){
    squareBlock.style.backgroundColor = "blue"
});
squareBlock.addEventListener("mousedown", function(){
    squareBlock.style.backgroundColor = "red"
});
squareBlock.addEventListener("mouseup", function(){
    squareBlock.style.backgroundColor = "yellow"
});
squareBlock.addEventListener("dblclick", function(){
    squareBlock.style.backgroundColor = "green"
});
squareBlock.addEventListener("mouseleave", function(){
    squareBlock.style.backgroundColor = "orange"
})

window.addEventListener("keydown", colorChange) 
    function colorChange () {
        console.log(squareBlock.style.background)
        if (event.which === 82) {
            squareBlock.style.background = "red"
        }
        else if (event.which === 89){
            squareBlock.style.background = "yellow"
        }
        else if (event.which === 71){
            squareBlock.style.background = "green"
        }
        else if (event.which === 66){
            squareBlock.style.background = "blue"
        }
        else if (event.which === 79){
            squareBlock.style.background = "orange"
        }
    }