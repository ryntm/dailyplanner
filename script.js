$(document).ready(function() {

    var currentHour = moment().format('HH')
    var tasks = JSON.parse(localStorage.getItem("dailytasks"));
    
    if (tasks == undefined) {
        tasks = {
            "9": "",
            "10": "",
            "11": "",
            "12": "",
            "13": "",
            "14": "",
            "15": "",
            "16": "",
            "17": "",
        }
    }

    console.log(tasks)

    $('.saveBtn').on('click', function(){
        var time = $(this).parent().attr("id");
        var task = $(this).siblings(".description").val().trim();
        console.log(task);
        localStorage.setItem(time, JSON.stringify(task));
    })

    function getTasks() {
        var tasks = JSON.parse(localStorage.getItem("time9"));
        console.log(tasks);
        $(".description").html()
        // for (var i = 9; i < Object.keys(localStorage).length+9; i++) {
        //     console.log(Object.keys(localStorage))
        //     var tasks = JSON.parse(localStorage.getItem("time"+i));
        //     console.log(tasks)
        //     // console.log(localStorage."time"+9)

        };
    

    //function for comparing the time so that we may color the planner based on the time. 


    // getTasks();

})