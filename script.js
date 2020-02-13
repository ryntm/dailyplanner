$(document).ready(function() {

var currentHour = moment().format('HH')
var currentDate = moment().format('ll');
let tasks = {}

//function to get the last saved date
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
            hour14: "",hour15: "",hour16: "",hour17: ""}
    }
}

function getTasks() {
    getSavedDate()
    var tasks = JSON.parse(localStorage.getItem("tasks"||'{}'));
    if (tasks === null) {
        tasks = 
                {hour9: "",hour10: "",hour11: "",hour12: "",hour13: "",
                hour14: "",hour15: "",hour16: "",hour17: ""}
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
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
        var textAreas = `
        <div class="time-block"> 
            <div class="row">
                <div class="hour">${hourText}</div>
                <textarea class="description" id="${hourID}">${tasks[hourID]}</textarea>
                <button class="saveBtn" id="${hourID}button">save</button>
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

});