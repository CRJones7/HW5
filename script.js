
//puts current date on jumbotron
var currentDay = moment().format("dddd, MMMM Do");
console.log(currentDay);
var showMoment = document.getElementById("currentDay");
    showMoment.innerHTML = currentDay;

//time variable 
var now = parseInt(moment().format("HH"));


var time9AM = ("#9AM");
var time10AM = ("#10AM");
var time11AM = ("#11AM");
var time12PM = ("#12PM");
var time1PM = ("#1PM");
var time2PM = ("#2PM");
var time3PM = ("#3PM");
var time4PM = ("#4PM");
var time5PM = ("#5PM");


$(document).ready(function(){

    $("textarea").each(function(){
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