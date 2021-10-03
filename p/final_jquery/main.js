// Question-one
$(".btn-1").click(function () {
  $("#question-one").toggleClass("bg-1"); // Adding class bg-1 which causes the background color change.
});

// Question-Two
$(function () {
  $("#question-accordion").accordion({
    collapsible: true, // This help to close a accordion
  });
});

// Question-Three
$(".btn-2").click(function () {
  $(".msg-1").text("Yes! coding is cool");
});

// Question-Four
$("#question-four").mouseover(function () {
  $("#question-four").css("background-color", "#ff8843");
});
