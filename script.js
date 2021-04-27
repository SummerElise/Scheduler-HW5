var today = moment();
$("#currentDay").text(today.format("LLLL"));

var rows = document.getElementsByClassName("row");
var currentHour = parseInt(moment().format('H'));