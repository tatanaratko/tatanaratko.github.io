

function add() {
    var x, y, result;

    x=document.getElementById("x").value;
    x=parseInt(x);
    
    y=document.getElementById("y").value;
    y=parseInt(y);

    result=x+y;
    document.getElementById("result").innerHTML=result;
}

function subtract() {
    var x, y, result;

    x=document.getElementById("x").value;
    x=parseInt(x);

    y=document.getElementById("y").value;
    y=parseInt(y);

    result=x-y;
    document.getElementById("result").innerHTML=result;
}

function multiply() {
    var x, y, result;
    x=document.getElementById("x").value;
    x=parseInt(x);

    y=document.getElementById("y").value;
    y=parseInt(y);

    result=x*y;
    document.getElementById("result").innerHTML=result;
}

function divide() {
    var x, y, result;

    x=document.getElementById("x").value;
    x=parseInt(x);

    y=document.getElementById("y").value;
    y=parseInt(y);

    result=x/y;
    document.getElementById("result").innerHTML=result;
}

function pow(x, n) {
    var x, y, result;
    x=document.getElementById("x").value;
    x=parseInt(x);

    y=document.getElementById("y").value;
    y=parseInt(y);
    
    result=Math.pow(x, y);
    document.getElementById("result").innerHTML=result;
}