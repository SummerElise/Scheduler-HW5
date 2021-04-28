var today = moment();
$("#currentDay").text(today.format("LLLL"));

const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

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

function setColor(element, color) {
    element.style.backgroundColor = color;
}

