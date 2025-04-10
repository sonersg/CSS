// Mon 27, May 2024

const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function runClock() {
  const date = new Date();
  const seconds = date.getSeconds() / 60;
  const minutes = (seconds + date.getMinutes()) / 60;
  const hours = (minutes + date.getHours()) / 12;

  rotateClockHands(hourHand, hours);
  rotateClockHands(minuteHand, minutes);
  rotateClockHands(secondHand, seconds);
}

function rotateClockHands(element, rotation) {
  element.style.setProperty("--rotate", rotation * 360);
}

setInterval(runClock, 1000);
