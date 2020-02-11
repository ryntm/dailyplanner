$(document).ready(function() {

    var currentHour = moment().format('HH')
    // var tasks = JSON.parse(localStorage.getItem("dailytasks"));
    
    // if (tasks == undefined) {
    //     tasks = {
    //         "9": "",
    //         "10": "",
    //         "11": "",
    //         "12": "",
    //         "13": "",
    //         "14": "",
    //         "15": "",
    //         "16": "",
    //         "17": "",
    //     }
    // }

    // console.log(tasks)

    

    $('.saveBtn').on('click', function(){
        var time = $(this).siblings(".description").attr("id");
        var task = $(this).siblings(".description").val().trim();
        tasks[time] = task
        localStorage.setItem(tasks, JSON.stringify(tasks));
    })

    function getTasks() {
        var tasks = JSON.parse(localStorage.getItem("tasks"||'{}'));

        if (tasks === null) {
            tasks = 
                    {hour9: "a",
                    hour10: "b",
                    hour11: "c",
                    hour12: "d",
                    hour13: "e",
                    hour14: "f",
                    hour15: "f",
                    hour16: "g",
                    hour17: "h"}
            
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }

        console.log(Object.keys(tasks).length)
        console.log()

        for (var i = 0; i < Object.keys(tasks).length; i++) {
           var hourText = "";
           var j = i+9
           var hourID = "hour" + j
           console.log(tasks[hourID])
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
                    <button class="saveBtn">save</button>
                </div>
            </div>`
            $(".container").append(textAreas)
        }

        // showTasks();
    };

    // function showTasks () {
    //     if (tasks !== null) {
    //         for (var i = 0; i < tasks.length; i++) {
    //             var j = i+9;
    //         $("#"`${j}`).text(tasks[i]);
    //         }
    //     }
    // }

    //function for comparing the time so that we may color the planner based on the time. 


    getTasks();

})