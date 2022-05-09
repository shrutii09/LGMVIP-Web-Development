
function clr(){
    document.getElementById("screen").value=""
}

function view(num){
    document.getElementById("screen").value+=num
}

function compute(){
    let x = document.getElementById("screen").value
    let y = eval(x)
    document.getElementById("screen").value = y
}

function del(){
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substr(0, value.length - 1);
}

