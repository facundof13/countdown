let minSelected;
let startDate;
let alarmSound;
let timeTicking;

function preload() {
  soundFormats('mp3');
  alarmSound = loadSound('alarm.mp3');
}

function setup() {
  noCanvas();
}

function draw() {
  let currentDate = new Date().getTime();
  let timeLeft = document.getElementById('timeLeft');
  let minsLeft = secondsToHms(ceil((startDate - currentDate) / 1000));
  timeLeft.innerHTML = minsLeft != "" ? minsLeft : 0;
  if (timeTicking) {
    document.title = minsLeft != "" ? minsLeft : 0;
  } else {
    document.title = "Countdown";
  }

  if ((currentDate >= startDate) && timeTicking) {
    alarmSound.play();
    timeTicking = false;
  }
}

function getTime() {
  let n = document.getElementById('numMinutes');
  alarmSound.stop();
  minSelected = n.value;
  startDate = new Date();
  startDate = (startDate.getTime() + minSelected * 60000);
  timeTicking = true;
}

function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return hDisplay + mDisplay + sDisplay;
}

function stopSound() {
  alarmSound.stop();
  timeTicking = false;
}
