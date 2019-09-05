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
  var x = document.getElementById("day");
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  x.innerHTML = weekdays[weekday_value] + ", " + h + ":" + m;
}
