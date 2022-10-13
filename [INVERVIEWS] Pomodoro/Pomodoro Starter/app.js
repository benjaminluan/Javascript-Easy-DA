const millisecondsHTML = document.querySelector(".timer__milliseconds");
const secondsHTML = document.querySelector(".timer__seconds");
const minutesHTML = document.querySelector(".timer__minutes");
let startTime = 25 * 60000;
let savedTime = 0;
let cancelId;

const startTimer = () => {
  currentTime = Date.now();
  cancelId = requestAnimationFrame(updateTimer);
};

const stopTimer = () => {
  savedTime = Date.now() - currentTime;
  cancelAnimationFrame(cancelId);
};

const resetTimer = () => {
  savedTime = 0;
  secondsHTML.innerHTML = "00";
  minutesHTML.innerHTML = "25";
  millisecondsHTML.innerHTML = "000";
  cancelAnimationFrame(cancelId);
};

const updateTimer = () => {
  let milliseconds = startTime - (Date.now() - currentTime + savedTime);
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(milliseconds / 60000);
  let millisecondsText = milliseconds % 1000;
  let secondsText = seconds % 60;
  millisecondsHTML.innerHTML = millisecondsText;
  secondsHTML.innerHTML = secondsText;
  cancelId = requestAnimationFrame(updateTimer);
  if (secondsText <= 9) {
    secondsHTML.innerHTML = "0" + seconds;
  }
  if (minutes <= 9) {
    minutesHTML.innerHTML = "0" + minutes;
  }
  if (millisecondsText <= 99) {
    millisecondsHTML.innerHTML = "0" + millisecondsText;
  }
  if (millisecondsText <= 9) {
    millisecondsHTML.innerHTML = "00" + millisecondsText;
  }
  if (millisecondsText <= -1) {
    savedTime = 0;
    secondsHTML.innerHTML = "00";
    minutesHTML.innerHTML = "00";
    millisecondsHTML.innerHTML = "000";
    cancelAnimationFrame(cancelId);
  }
};
