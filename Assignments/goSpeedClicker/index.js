let clicker = 0

if (localStorage.getItem('click') !==null) {
	clicker = Number(localStorage.click);
}

const pageClicked = () => {
	numClicked++;
	localStorage.SetItem("click", numClicked);
	console.log(numClicked);
}

window.addEventlistener("click", pageClicked);
