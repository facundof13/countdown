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
  let h = Math.floor(d / 3600);
  let m = Math.floor(d % 3600 / 60);
  let s = Math.floor(d % 3600 % 60);

  let hDisplay;
  let mDisplay;
  let sDisplay;

  if (h > 0) {
    if (h < 9) {
      hDisplay = ("0" + h + ":");
    }
    hDisplay = h + ":";
  } else {
    hDisplay = "00:"
  }
  if (m > 0) {
    if (m < 9) {
      mDisplay = ("0" + m + ":");
    }
    mDisplay = m + ":";
  } else {
    mDisplay = "00:"
  }

  if (s > 0) {
    if (s >= 10) {
      sDisplay = s;
    } else {
      sDisplay = "0" + s;
    }
  } else {
    sDisplay = "00";
  }


  return hDisplay + mDisplay + sDisplay;
}

function stopSound() {
  alarmSound.stop();
  timeTicking = false;
}
