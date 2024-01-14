var arr = ['A','B','C'];
var str = "Welcome to Strings in Javascript. Strings are collection of words. Strings are declared withing sigle or double quotes."; 
var length = str.length;
// length => 
console.log("String Lenght is: "+length);

//slice
// 0 =W
// 1= e
// 2=l
// 3=c

// 32=.

let extractStr = str.slice(0,7);
console.log("Slice output: "+extractStr);

//substring
let subStr = str.substring(0,7);
console.log("Substring output: "+subStr);

//replace:
let replaceStr = str.replace("Strings","Array");
console.log("Replace output: "+replaceStr);

//replaceAll
let replaceAllStr = str.replaceAll("Strings","Arrays");
console.log("ReplaceAl output: "+replaceAllStr);

//toUpperCase
let upperCaseStr = str.toUpperCase();
console.log("toUpperCase result: "+upperCaseStr);

//toLowerCase
let lowerCaseStr = str.toLowerCase();
console.log("toLowerCase result: "+lowerCaseStr);

//concat
let str2 = "Strings are easy to learn.";
let concatStr = str.concat(" ",str2);
console.log("Concat result: "+concatStr);

// let str3 = str +" "+ str2;
// console.log("output of str3: "+str3);

//trim
let str4 = " INDIA ";
console.log("length before trim : "+str4.length);

str4 = str4.trim();
console.log("length after trim : "+str4.length);
 console.log("Trim output:"+str4);
//trimStart
//trimEnd

//padStart
let str5 = "H";
let padStr = str5.padStart(10,"R");
console.log("padStart output: "+padStr);

// let text = "5";
// let padded = text.padStart(4,"0");
// console.log("padded:"+padded);

let charAtStr = str.charAt(1);
console.log("charAt output: "+charAtStr);

//split

let splitStr = str.split(".");
console.log("split output: ",splitStr);

let str6 = "A,B,C,D,E,F";
let str6Split = str6.split(",");
console.log("str6Split ouput: ",str6Split);

let arr1 = ['A','B','C','D'];
console.log(arr1.toString());

let str7 = "WELCOME";
console.log("str7: ",str7);
let str7Arr = str7.split("");
console.log("str7Arr: ",str7Arr);


//Example:
