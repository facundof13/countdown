let minSelected;
let startDate;

function setup() {
	noCanvas();
}

function draw() {
	let currentDate = new Date().getTime();
	let timeLeft = document.getElementById('timeLeft');



	if (currentDate >= startDate) {
		console.log('Timer Over');
		timeLeft.innerHTML = "0";
	} else {
		timeLeft.innerHTML = ceil((startDate - currentDate) / 1000);
	}
}

function getTime() {
	let n = document.getElementById('numMinutes');
	minSelected = n.value;
	startDate = new Date();
	startDate = (startDate.getTime() + minSelected*60000);
}
