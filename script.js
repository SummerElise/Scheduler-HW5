var today = moment();
$("#currentDay").text(today.format("LLLL"));

//rows are in a 24hour format
const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));


//Row IDs are made to be compared with the current hour so that the proper color will be shown
Array.from(rows).forEach(row => {
let 
rowIdString = row.id,
rowHour;
if (rowIdString) {
    rowHour = parseInt(rowIdString);
}
if (rowHour) {
 if (currentHour === rowHour) {
     setColor(row, "green");
 }   else if ((currentHour < rowHour) && (currentHour > rowHour - 10)) {
     setColor(row,"red");
 }   else if ((currentHour > rowHour) && (currentHour < rowHour + 10)) {
     setColor(row, "lightgrey");
 }   
}
});

//Background color of row is displayed based on the hour
function setColor(element, color) {
    element.style.backgroundColor = color;
}

