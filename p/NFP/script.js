var fName = prompt("Hey! Enter Your Name.");
var age = parseInt(prompt(fName + "! Enter Your Age."));

var city = prompt("Where do you live?");
var schoolName = prompt("What's your school name");

var weather = prompt("What kind of weather you like (cold or warm)?");
var loveMusic = prompt("What kind of music, you like!");

var sentence = "";

if (age < 18) {
  sentance =
    "Hey " +
    fName +
    "! Your Age is " +
    age +
    " and you're under 18. <br />You Live in " +
    city +
    ". Your School Name is " +
    schoolName +
    ". <br /> You like " +
    weather +
    " weather. And you like " +
    loveMusic +
    " Music.";
} else {
  sentance =
    "Hey " +
    fName +
    "! Your Age is " +
    age +
    " and you're over 18(or just 18). <br />You Live in " +
    city +
    ". Your School Name is " +
    schoolName +
    ". <br /> You like " +
    weather +
    " weather. And you like " +
    loveMusic +
    " Music.";
}

document.write(sentance);
