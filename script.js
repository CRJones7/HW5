
//puts current date on jumbotron
var currentDay = moment().format("dddd, MMMM Do");
console.log(currentDay);
var showMoment = document.getElementById("currentDay");
showMoment.innerHTML = currentDay;

//time variable 
var now = parseInt(moment().format("HH"));





$(document).ready(function () {

    $("textarea").each(function () {
        var name = parseInt($(this).attr("name"));
        if (name < now) {
            $(this).css("background-color", "#8d99AE");
        }
        else if (name > now) {
            $(this).css("background-color", "#D0EE93");
        }
        else if (name == now) {
            $(this).css("background-color", "#EEA793")
        }
    })
});


// retrieve saved tasks
var schedule = JSON.parse(localStorage.getItem("schedule"));
console.log(schedule);
//handle empty task list
if (schedule === null) {
    schedule = [];
for(var i = 0; i < 12; i++){
 schedule.push ({
     note:"",
 })
}  
} else {
    for (var i = 0; i === schedule.length; i++) {
    
        var savedNotes = localStorage.getItem(note);
        console.log(savedNotes);
        // var savedNotes = $(`#txt-${i+9}`).val(schedule[i].note);

    }
}

// print to tasks list from local storage





$(".time-block").on("click", function () {
    event.preventDefault();
    var sbtn = $(this);
    var index = sbtn.attr("data");
console.log(index);
// console.log($("#txt-9"));
    var taskList = $(`#txt-${index}`).val();
// console.log(taskList);
// console.log(schedule);
    schedule[index-9].note = taskList;


    localStorage.setItem("schedule", JSON.stringify(schedule));



});

// localStorage.setItem("9AM", (time9AM.val()));
// $("time9AM").append(localStorage.getItem("#hour-9"));