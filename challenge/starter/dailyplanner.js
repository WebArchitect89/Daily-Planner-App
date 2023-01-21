// Display the current day at the top of the calender when a user opens the planner.
    
    // moment js today

// Present timeblocks for standard business hours when the user scrolls down.

    // create li for time blocks with jQuery 

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Color using logic  check out Activities 7.1.3 and 7.1.4 - attach functionality to events. Also, use the .css() method.

// Allow a user to enter an event when they click a timeblock

// Check out how to do that in Activities 7.1.5 and 7.1.6 - Working with forms - reading data from inputs; working with checkboxes

// Save the event in local storage when the save button is clicked in that timeblock.

// Check out LocalStorage

// Persist events between refreshes of a page

//Prevent Default

// The following animation demonstrates the application functionality:

// A user clicks on slots on the color-coded calendar and edits the events.




//Check the links in HTML


// Display current date onto scheduler
var today = moment().format('dddd, MMMM Do');
$("#currentDay").text(today);

//Buttons will save user input to local storage. Additionally if there are any saved inputs, they will display in the textarea.
$(".b9").on("click",  function(){
    var inputText = $(".e9").val();
    localStorage.setItem("09:00",inputText);
});
$(".e9").val(localStorage.getItem("09:00"));