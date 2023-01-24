// Display the current day at the top of the calender when a user opens the planner.

// moment js today

// Present timeblocks for standard business hours when the user scrolls down.

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Color using logic  check out Activities 7.1.3 and 7.1.4 - attach functionality to events. Also, use the .css() method.

// Allow a user to enter an event when they click a timeblock

// Check out how to do that in Activities 7.1.5 and 7.1.6 - Working with forms - reading data from inputs; working with checkboxes

// Save the event in local storage when the save button is clicked in that timeblock.

// Check out LocalStorage

// Persist events between refreshes of a page

// The following animation demonstrates the application functionality:

// A user clicks on slots on the color-coded calendar and edits the events.





// Display current date onto scheduler
var today = moment().format('dddd, MMMM Do');
$("#currentDay").text(today);

//Display the colors based on past present and future
var currentTime = moment().hour();




$(".time-block").each(function() {
    var currHour = parseInt($(this).attr("id"));


    if (currHour > currentTime) {
        $(this).addClass("future");
    } else if (currHour === currentTime) {
        $(this).addClass("present");
    } else {
        $(this).addClass("past");
    }
});


console.log(this); //each time-block

//Buttons will save user input to local storage. Additionally if there are any saved inputs, they will display in the textarea.
$(".b9").on("click", function () {
    var inputText = $(".e9").val();
    localStorage.setItem("09:00", inputText);
});
$(".e9").val(localStorage.getItem("09:00"));

$(".b10").on("click", function () {
    var inputText = $(".e10").val();
    localStorage.setItem("10:00", inputText);
});
$(".e10").val(localStorage.getItem("10:00"));

$(".b11").on("click", function () {
    var inputText = $(".e11").val();
    localStorage.setItem("11:00", inputText);
});
$(".e11").val(localStorage.getItem("11:00"));

$(".b12").on("click", function () {
    var inputText = $(".e12").val();
    localStorage.setItem("12:00", inputText);
});
$(".e12").val(localStorage.getItem("12:00"));

$(".b1").on("click", function () {
    var inputText = $(".e1").val();
    localStorage.setItem("1:00", inputText);
});
$(".e1").val(localStorage.getItem("1:00"));

$(".b2").on("click", function () {
    var inputText = $(".e2").val();
    localStorage.setItem("2:00", inputText);
});
$(".e2").val(localStorage.getItem("2:00"));

$(".b3").on("click", function () {
    var inputText = $(".e3").val();
    localStorage.setItem("3:00", inputText);
});
$(".e3").val(localStorage.getItem("3:00"));

$(".b4").on("click", function () {
    var inputText = $(".e4").val();
    localStorage.setItem("4:00", inputText);
});
$(".e4").val(localStorage.getItem("4:00"));

$(".b5").on("click", function () {
    var inputText = $(".e5").val();
    localStorage.setItem("5:00", inputText);
});
$(".e5").val(localStorage.getItem("5:00"));