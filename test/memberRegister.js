var frms = document.forms;

function clickfunc() {
    var a = document.forms["frm1"];
    var text = "";
    var i;
    for(i =0; i<a.length; i++){
        text += a[i].value + "<br>";
    }
    document.getElementById("show").innerHTML = text;
}