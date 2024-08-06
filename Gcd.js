const input = require("readline-sync");
let a = input.questionInt("enter the number :");
let b = input.questionInt("enter the number :");
let c = input.questionInt("enter the number :");
 while (a%b!=0) {
    r = a%b;
    a = b;
    a = c;
    b = r;
    
 }
 console.log("hcf",b);



 //GCD//