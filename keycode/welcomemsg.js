var today = new Date();
var hourNow = today.getHours();
var greeting;
var icon;

if (hourNow < 12){
  greeting = "Good Morning";
  icon = "coffee";
}
else if (hourNow < 20){
  greeting = 'Good afternoon!';
  icon = "sun-o";
}
else if (hourNow < 24){
  greeting = "Good evening"
  icon = "moon-o";
}
else {
  greeting = "Welcome";
}

document.getElementById("col-1").innerHTML = "<h3>" + greeting + " </h1>";

document.getElementById("icon").innerHTML = ('<i class="fa fa-' + icon + '" aria-hidden="true"></i>');