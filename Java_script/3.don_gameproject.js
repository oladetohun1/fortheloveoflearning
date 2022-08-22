var restart = document.querySelector("#one")
var squares = document.querySelectorAll("td")
function clear(){
    for(var i=0; i<squares.length;i++){
        squares[i].textContent= ""
    }
}

restart.addEventListener("click" ,clear )
  
function game(){
    if(this.textContent ===""){
        this.textContent="X"
    }
    else if(this.textContent==="X"){
        this.textContent="O"
    }
    else{
        this.textContent=""
    }

}
for(var i=0;i<squares.length;i++)
squares[i].addEventListener("click",game)