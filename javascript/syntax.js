/* Arithmatic Operators */
var a = 10;
var b = 20;
var c = parseInt(a) + b;
var d = parseInt(a) * b;
var e = parseInt(a) / b

console.log("Sum = "+c);
console.log("Multiple = "+d);
console.log("Divide = "+e);

/* Comparison Conditional Opertors */

if(a!=b){
    console.log("a is greater than b");
}else{
    console.log("a is smaller than b");
}
// ==  : compares the values only and not the type of the value;
// === : compares the values with its types strictly
let num1 = '40';
let num2 = 40;
if(num1===num2){ 
    console.log("True: Num1 and Num2 are equal");
}else{
    console.log("False:Num1 and Num2 are not equal");
}

// condition ? true condition : false condition;
console.log("Trenary Operator Example:");
num1===num2 ? console.log("True: Num1 and Num2 are equal") : console.log("False:Num1 and Num2 are not equal");

