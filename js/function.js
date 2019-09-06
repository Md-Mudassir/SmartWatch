let time = document.getElementsByClassName("time");
let day = document.getElementsByClassName("day");

// day and time functions
function addZero(i) {
  if (i < 10) {
    i = 0 + i;
  }
  return i;
}

function Time() {
  var weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";

  var d = new Date();
  weekday_value = d.getDay();
  let x = document.getElementById("time");
  let y = document.getElementById("day");
  let w = document.getElementById("watch");
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  x.innerHTML = h + ":" + m;
  w.innerHTML = h + ":" + m;
  y.innerHTML = weekdays[weekday_value];
}

//Timer
let watch = document.getElementsByClassName("digits")[0],
  start = document.getElementById("timerplay"),
  lap = document.getElementsByClassName("lap"),
  stop = document.getElementById("stop"),
  clear = document.getElementById("clear"),
  seconds = 0,
  minutes = 0,
  hours = 0,
  t;

function add() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  watch.textContent =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds);

  timer();
}
function timer() {
  t = setTimeout(add, 1000);

  document.getElementsByClassName("lap").innerHTML = "eh";
}

/* Start button */
timerplay.onclick = timer;

/* Stop button */
stop.onclick = function() {
  clearTimeout(t);
};

/* Clear button */
reset.onclick = function() {
  watch.textContent = "00:00:00";
  seconds = 0;
  minutes = 0;
  hours = 0;
};
