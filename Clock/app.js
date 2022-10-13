const hourHand = document.getElementById("clock__hand--hour");
const minuteHand = document.getElementById("clock__hand--minute");
const secondHand = document.getElementById("clock__hand--second");
let currentTime = Date.now();
// 12 Hours in a clock
// 43200 seconds in a clock
// 360 degs in a clock.   hourHand.style.transform = 'rotate(315deg)';
// 60 minutes = 360 deg in a clock 

setInterval(handleHand, 1000);

function handleHand() {
  let newDate = new Date();
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let seconds = newDate.getSeconds();
  const secondsAngle = seconds * 6;
  const minuteAngle = minutes * 6;
  const hourAngle = hours * 30;
  secondHand.style.transform = `rotate(${secondsAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
 }

handleHand();
