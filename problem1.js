var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);

function showTime() {
  var clockTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  document.getElementById("clock").innerText = clockTime;
}

var intervalRef;

function startclock() {
  intervalRef = setInterval(showTime, 1000)
}

function stopclock() {
  clearInterval(intervalRef)
}