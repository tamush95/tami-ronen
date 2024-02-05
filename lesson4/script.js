let counter = 1;

function plus() {
    //הגדלנו את המשתנה ב1
    counter++;
    //שמנו את הערך ב-HTML
    document.getElementById("count").innerHTML = counter;
    //שינינו את גודל הכתב של המספר בהתאם לערך של המספר
    document.getElementById("count").style.fontSize = counter + "px";
}
function minus() {
    //הקטנו את המשתנה ב1
    counter--;
    //שמנו את הערך ב-HTML
    document.getElementById("count").innerHTML = counter;
    //שינינו את גודל הכתב של המספר בהתאם לערך של המספר
    document.getElementById("count").style.fontSize = counter + "px";
}