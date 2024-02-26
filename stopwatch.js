let [hours, minutes, seconds, milliSeconds] = [0, 0, 0, 0];
let startStop = document.querySelector(".start-stop");
let reset = document.querySelector(".reset");
let timer = document.querySelectorAll(".timer");
let timerUnit = document.querySelectorAll(".time-unit");
let interval;

startStop.addEventListener("click", () => {
  if (startStop.textContent === "START") {
    startStop.textContent = "STOP";
    interval = setInterval(start, 10);
  } else {
    startStop.textContent = "START";
    stop();
  }
});

let start = () => {
  milliSeconds++;
  if (milliSeconds === 100) {
    seconds++;
    milliSeconds = 0;
  }
  if (seconds === 60) {
    minutes++;
    seconds = 0;
    timer[1].style.display = "inline-block";
    timerUnit[1].style.display = "inline-block";
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
    timer[0].style.display = "inline-block";
    timerUnit[0].style.display = "inline-block";
  }

  milliSeconds < 10
    ? (timer[3].textContent = "0" + milliSeconds)
    : (timer[3].textContent = milliSeconds);

  (hours > 0 || minutes > 0) && seconds < 10
    ? (timer[2].textContent = "0" + seconds)
    : (timer[2].textContent = seconds);

  hours > 0 && minutes < 10
    ? (timer[1].textContent = "0" + minutes)
    : (timer[1].textContent = minutes);

  timer[0].textContent = hours;
};

let stop = () => {
  clearInterval(interval);
};

reset.addEventListener("click", () => {
  clearInterval(interval);
  startStop.textContent = "START";
  [hours, minutes, seconds, milliSeconds] = [0, 0, 0, 0];
  for (let i = 0; i < timer.length; i++) {
    if (i === 3) {
      timer[i].textContent = "00";
    } else {
      timer[i].textContent = "0";
      if (i < 2) {
        timer[i].style.display = "none";
        timerUnit[i].style.display = "none";
      }
    }
  }
});
