let milisecondsHTML = document.querySelector(".timer__milliseconds");
let secondsHTML = document.querySelector(".timer__seconds");
let minuteHTML = document.querySelector(".timer__minutes");
let savedTime = 0;
let startTime;
let cancelId;
let starting = false;

const startButton = () => {
  if (!starting) {
    startTime = Date.now();
    cancelId = requestAnimationFrame(updateTimer);
    starting = true;
  }
};

const stopButton = () => {
  if (starting) {
    savedTime = savedTime + Date.now() - startTime;
    cancelId = cancelAnimationFrame(cancelId);
    starting = false;
  }
};

const updateTimer = () => {
  let miliseconds = Date.now() - startTime + savedTime;
  let milisecondsText = miliseconds % 1000;
  let seconds = Math.floor(miliseconds / 1000);
  let minutes = Math.floor(seconds / 60);

  if (seconds < 9) {
    secondsHTML.innerHTML = "0" + seconds;
  }
  if (milisecondsText < 9) {
    milisecondsHTML.innerHTML = "00" + milisecondsText;
  } else if (milisecondsText < 99) {
    milisecondsHTML.innerHTML = "0" + milisecondsText;
  } else milisecondsHTML.innerHTML = milisecondsText;

  if (minutes < 9) {
    minuteHTML.innerHTML = "0" + minutes;
  }
  cancelId = requestAnimationFrame(updateTimer);
};

const resetButton = () => {
  miliseconds = 0;
  savedTime = 0;
  milisecondsHTML.innerHTML = "000";
  secondsHTML.innerHTML = "00";
  minuteHTML.innerHTML = "00";
  cancelId = cancelAnimationFrame(cancelId);
  starting = false;
};

// After you set the startTime,
// Create a function that keeps track of the time that has elapsed.
//
