$(document).ready(function() {

var currentHour = moment().format('HH')
var currentDate = moment().format('ll');
let tasks = {}

//function to getting and setting the last saved date, if date is not that same as before, reset array. 
function getSavedDate() {
    var savedDate = JSON.parse(localStorage.getItem('savedDate'));
    if (savedDate === null) {
        savedDate = currentDate
        localStorage.setItem('savedDate', JSON.stringify(savedDate))
    } else 
    if (savedDate !== currentDate) {
        savedDate = currentDate
        localStorage.setItem('savedDate', JSON.stringify(savedDate))
        tasks = 
            {hour9: "",hour10: "",hour11: "",hour12: "",hour13: "",
            hour14: "",hour15: "",hour16: "",hour17: ""};
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }
}

// get tasks from localstorage and then setting them to textareas if tey exist. 
function getTasks() {
    getSavedDate()

    // getting or setting tasks array
    var tasks = JSON.parse(localStorage.getItem("tasks"||'{}'));
    if (tasks === null) {
        tasks = 
                {hour9: "",hour10: "",hour11: "",hour12: "",hour13: "",
                hour14: "",hour15: "",hour16: "",hour17: ""}
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    // looping through all necessary divs to display html
    for (var i = 0; i < Object.keys(tasks).length; i++) {
        var hourText = "";
        var j = i+9
        var hourID = "hour" + j
        if (j > 12) {
        hourText = j-12 + " PM"
        } else if (j < 11) {
        hourText = j + " AM"
        } else {
        hourText = j + " PM"
        }

        // disable textarea it's id is less than the current time. 
        var disableTextarea = "";
        if (currentHour > j) {
            disableTextarea = "disabled=\"disabled\""
        }

        // setting past/current/present state to the textarea to change color
        var mcfly = "";
        if (j > currentHour) {
            mcfly = "future"
        } else if (j < currentHour) { 
            mcfly = "past"
        } else {
            mcfly = "present"
        }

        // string interpolation for each hour row
        var textAreas = `
        <div class="time-block"> 
            <div class="row">
                <div class="hour">${hourText}</div>
                <textarea class="description ${mcfly}" id="${hourID}" ${disableTextarea}>${tasks[hourID]}</textarea>
                <button class="saveBtn" id="${hourID}button"><i class="fas fa-save icon-4x"></i></button>
            </div>
        </div>`
        $(".container").append(textAreas)
    }
};

getTasks();

// when the savebtn is clicked, it takes the text from the textarea
// and then saves it in the array position of the textarea's id 
$(".saveBtn").on('click', function() {
    console.log(tasks)
    tasks = JSON.parse(localStorage.getItem('tasks'));
    var time = $(this).siblings(".description").attr("id");
    var task = $(this).siblings(".description").val().trim();
    tasks[time] = task
    localStorage.setItem('tasks', JSON.stringify(tasks));
});

$('#currentDay').text(currentDate);

});