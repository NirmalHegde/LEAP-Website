var finalDate = new Date("Sep 19, 2018 08:30:00").getTime();

var countUpdate = setInterval(function() {

  var now = new Date().getTime();
  var timeLeft = finalDate - now;


  var days = Math.floor(timeLeft / (1000*60*60*24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


  document.getElementById("timeDisplay").innerHTML = days + ":"+ hours + ":" + minutes + ":" + seconds

  if (timeLeft < 0) {
    clearInterval(countUpdate);
    document.getElementById("timeDisplay").innerHTML = "Expired"
  }
}, 1000);