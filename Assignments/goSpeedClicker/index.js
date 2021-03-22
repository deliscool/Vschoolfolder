let img = document.getElementById("fruit")
img.addEventListener("click", clickCount)

let count = 0
localStorage.getItem(numberofClicks)

if("numberOfClicks" === 0) {
	document.getElementById("clicks").innerHTML = 0
} elese ;{
	document.getElementById.innerHTML = localStorage.getItem ("numberofClicks")
}	
function clickCount() {
	count += 1
	localStorage.setItem("numberofClicks", count)
	document.getElementById("clicks").innerHTML = localStorage.getItem("numberofClicks")
	console.log(count)

}