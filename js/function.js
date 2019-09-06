function msg() {
  let messages = ["AXFLKRT", "AXSNDL", "Shaik"];
  document.querySelector("#msg #list1").innerHTML = messages[0];
  document.querySelector("#msg #list2").innerHTML = messages[1];
  document.querySelector("#msg #list3").innerHTML = messages[2];
}

function hidden() {
  document.getElementById("stop").style.visibility = "hidden";
  document.getElementById("timerplay").style.visibility = "hidden";
  document.getElementById("reset").style.visibility = "hidden";
}

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
}

/* Start button */
timerplay.onclick = timer;

/* Stop button */
stop.onclick = function() {
  clearTimeout(t);
};

/* Reset button */
reset.onclick = function() {
  watch.textContent = "00:00:00";
  seconds = 0;
  minutes = 0;
  hours = 0;
};

function show() {
  document.getElementById("stop").style.visibility = "visible";
  document.getElementById("timerplay").style.visibility = "visible";
  document.getElementById("reset").style.visibility = "visible";
}

//JQUERY FUNCTIONS

$(".musicicon").on("click", function() {
  $("#player").toggle();
  hidden();
});

$(".clockicon").on("click", function() {
  $("#day,#time,#player,#msg").hide();
  $(".digits,.lap").show();
  show();
});

$("#watch").on("click", function() {
  $("#day,#time").show();
  $(".digits,.lap,#player,#stop,#msg").hide();
  hidden();
});

$(".msgicon").on("click", function() {
  $("#day,#time,#player,.digits,.lap").hide();
  $("#msg").show();
  hidden();
});

$("#msg #list1").on("click", function() {
  $("#msg #list1").html("Your order ID#0927 will be delivered today");
});

$("#msg #list2").on("click", function() {
  $("#msg #list2").html("Recharge of Rs:399 is successfull");
});

$("#msg #list3").on("click", function() {
  $("#msg #list3").html("Where are you?");
});
$(document).ready(function() {
  $("#player,#watch,#msg,.digits,.lap,.playbtn").hide();
  hidden();
});
