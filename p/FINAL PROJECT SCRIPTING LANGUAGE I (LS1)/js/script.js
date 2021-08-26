// Taking Inputs from User -- NAME, LOCATION, BIRTH YEAR
var usrName = prompt("Hey! What's your name?");
var usrLocation = prompt("Where do you live?");
var usrSchool = prompt("Where do you Study?");
var usrBornYear = parseInt(prompt("When did you born? (only year eg. 1995)"));
// ------------------------------------------------------

// This Function Will be used for Calculating the Approximate
// Age of the User
function approxUserAge(usrBornYear) {
  var usrAge = 2021 - usrBornYear;
  document.getElementById("userage").innerHTML = usrAge; // Printing Calculated Age on the Screen
}
// ------------------------------------------------------

// Printing "USER NAME" and USER "LOCATION" using ID and innerHTML
document.getElementById("username").innerHTML = usrName;
document.getElementById("userlocation").innerHTML = usrLocation;
document.getElementById("userschool").innerHTML = usrSchool;
// ------------------------------------------------------

// Calling The Function by Passing the Born Year of the User
approxUserAge(usrBornYear);
// ------------------------------------------------------
