// Part 6 - Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    namelength:function(){
        console.log(this.name.length)
    }
  }
  
  // Add a method called nameLength that prints out the
  // length of the employees name to the console.
  
  ///////////////////
  // PROBLEM 2 /////
  /////////////////
  
  // Given the object: 
  var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    report: function (){
        alert("Name is " + this.name +", job is: " + this.job + ", Age is: " + this.age + ".")
    }
  }
  
  // Write program that will create an Alert in the browser of each of the
  // object's values for the key value pairs. For example, it should alert:
  
  // Name is John Smith, Job is Programmer, Age is 31.
  
  
  
  ///////////////////
  // PROBLEM 3 /////
  /////////////////
  
  // Given the object:
var employee ={
    name: "John Smith",
    job: "Programmer",
    age: 31,
    lastname:function(){
        console.log(this.name.split(" ")[1])
    }
}