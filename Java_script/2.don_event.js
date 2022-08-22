var headone = document.getElementById("one");
var headtwo = document.getElementById("two");
var headthree = document.getElementById("three");



headone.addEventListener("mouseover",function(){
    headone.textContent = "Mouse currently over";
    headone.style.color = "red";
})

headone.addEventListener("mouseout" , function(){
    headone.textContent ="hover over me";
    headone.style.color = "black";
 })

 headtwo.addEventListener("click" , function(){
     headtwo.textContent = "clicked on";
     headtwo.style.color="red";
     
    
 })
 headthree.addEventListener("dblclick" , function(){
    headthree.textContent = "double clicked on";
    headthree.style.color="red";
    
   
})
