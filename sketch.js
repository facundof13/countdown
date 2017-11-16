let date;
let htmlHour;
let htmlMinute;
let htmlSecond;

function setup() {
	noCanvas();
}

function draw() {
	date = new Date();

	let hr = date.getHours();
	let mins = date.getMinutes();
	let sec = date.getSeconds();

	htmlHour = document.getElementById('hr');
	htmlMinute = document.getElementById('mins');
	htmlSecond = document.getElementById('sec');

	htmlHour.innerHTML = hr;
	htmlMinute.innerHTML = mins;
	htmlSecond.innerHTML = sec;
}
