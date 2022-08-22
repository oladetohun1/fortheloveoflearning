var myheader = document.querySelector("h1")
myheader.style.color = "red" 

function getRandomColor(){
    var letter = "0123456789ABCDEF";
    var color ="#";
    for(var i = 0;i<6;i++){
        color +=letter[Math.floor(Math.random()*16)];
    }
    return color
}

function changeHeaderColor(){
    colorInput = getRandomColor()
    myheader.style.color = colorInput;
}

setInterval("changeHeaderColor()",500);