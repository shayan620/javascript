alert ("I am 15 years old")


let visitCount = localStorage.getItem("visitCount");

if (visitCount === null) {
    visitCount = 1;
} else {
    visitCount = parseInt(visitCount) + 1;
}

localStorage.setItem("visitCount", visitCount);

document.write("You have visited this site " + visitCount + " times.");

var birthYear = 2000; 

document.write("My birth year is  " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof birthYear);


var visitorName = "John Doe";  
var productTitle = "T-shirt"; 
var quantity = 5;             

document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");


