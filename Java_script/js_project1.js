var first_name = prompt("Whats your first name")
var last_name = prompt("Whats your last name")
var age = prompt("How old are you")
var height=prompt("what is your height in centimetres")
var pet_name = prompt("What is your pet name")
alert("Thank you for the information")

var namecond = null
var agecond = null
var heightcond= null
var petcond= null

if (first_name[0] ===last_name[0]){
    namecond = true;
}else{
    namecond = false;
}
 if(age>20 && age<30){
     agecond= true;
 }else{
     agecond= false;
 }

 if(height >=170){
     heightcond=true
 }else{
     heightcond=false
 }

 if(pet_name[pet_name.length-1]==="y"){
     petcond=true
 }else{
     petcond= false
 }

 if(namecond  && agecond && heightcond && petcond ){
    console.log("welcome,you spy")
}else{
    console.log("sorry,you are not the one we are loooking for")
 }

